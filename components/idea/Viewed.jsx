import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getViewdSetup } from "../../helper/get";
import { ActivityIndicator } from "react-native-paper";
import IdeaItem from "./IdeaItem";
import CommentInput from "./CommentInput";
import CommentsFeed from "./CommentsFeed";

const Viewed = () => {
  const ideaState = useSelector((state) => state.Idea);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.AUTH);
  const setupId = ideaState.Id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getViewd = async () => {
      setIsLoading(true);
      const data = await getViewdSetup(setupId, user.id);
      setData(data);
      setIsLoading(false);
    };
    getViewd();
  }, [setupId, user.id]);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator
          color="#fff"
          size={30}
          style={{ marginTop: "50%" }}
        />
      ) : (
        <>
          <IdeaItem idea={data} />
          <CommentInput idea={data} />
          <CommentsFeed idea={data} />
        </>
      )}
    </View>
  );
};

export default Viewed;
