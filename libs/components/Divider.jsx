import React from "react";
import { StyleSheet, View } from "react-native";
import { globalStyles } from "../../styles/global";

const Divider = () => {
  return <View style={styled.content} />;
};

const styled = StyleSheet.create({
  content: {
    width: "100%",
    height: 1,
    backgroundColor: globalStyles.colors.neutral800,
  },
});

export default Divider;
