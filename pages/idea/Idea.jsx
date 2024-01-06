import React, { useCallback, useEffect } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { GlobalStyles, globalStyles } from "../../styles/global";
import { IdeasFeed } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getSetups } from "../../redux/ideaSlice";

const Idea = () => {
  const ideaState = useSelector((state) => state.Idea);
  const dispatch = useDispatch();

  const isLoading = ideaState.FETCH_STATUS === "Loading";

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getSetups());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ backgroundColor: globalStyles.colors.bg }}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" size={40} style={GlobalStyles.loader} />
      ) : (
        <IdeasFeed />
      )}
    </ScrollView>
  );
};

export default Idea;
