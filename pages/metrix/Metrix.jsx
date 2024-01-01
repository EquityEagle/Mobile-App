import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../../styles/global";
import { findAccountMetrix } from "../../redux/accounts";
import { MetrixContainer } from "../../components";

const Metrix = () => {
  const accState = useSelector((state) => state.ACC);
  const dispatch = useDispatch();
  const isLoading = accState.TRACK_STATUS === "Pending";
  const Ids = accState.Ids;

  useEffect(() => {
    dispatch(findAccountMetrix(Ids));
  }, []);

  const [loadingColor, setLoadingColor] = useState("blue");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the color between 'blue' and 'white'
      setLoadingColor((prevColor) => (prevColor === "blue" ? "white" : "blue"));
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={styledview.container}>
      {isLoading ? (
        <ActivityIndicator
          color={loadingColor}
          size={40}
          style={styledview.load}
        />
      ) : (
        <MetrixContainer />
      )}
    </ScrollView>
  );
};

const styledview = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.bg,
    // padding: 10,
    gap: 10,
    position: "relative",
    height: "100%",
    width: "100%",
  },
  load: {
    justifyContent: "center",
    height: 500,
  },
});

export default Metrix;
