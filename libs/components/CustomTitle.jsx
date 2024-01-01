import React from "react";
import { Text } from "react-native";
import { styledTitle } from "../styles/styled";

const CustomTitle = ({ title, width, left }) => {
  return (
    <Text style={{ ...styledTitle.classStyle, width: width, left: left }}>
      {title}
    </Text>
  );
};

export default CustomTitle;
