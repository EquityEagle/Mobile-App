import React from "react";
import { ScrollView, Text, View } from "react-native";
import { StyledView } from "../../styles/pages";
import { Viewed } from "../../components";

const ViewedItem = () => {
  return (
    <ScrollView style={StyledView.container}>
      <Viewed />
    </ScrollView>
  );
};

export default ViewedItem;
