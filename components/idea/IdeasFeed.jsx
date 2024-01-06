import React from "react";
import { FlatList, View } from "react-native";
import { StyledIdeas } from "../../styles/componets";
import { useSelector } from "react-redux";
import IdeaItem from "./IdeaItem";

const IdeasFeed = () => {
  const Ideas = useSelector((state) => state.Idea.IDEAS);
  return (
    <View style={StyledIdeas.container}>
      {Ideas.map((idea, index) => (
        <IdeaItem key={index} idea={idea} />
      ))}
    </View>
  );
};

export default IdeasFeed;
