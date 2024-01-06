import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyledIconWrap } from "../styles/styled";

const IconWrap = ({ icon, text, color, onPress }) => {
  return (
    <View style={StyledIconWrap.container}>
      <TouchableOpacity style={StyledIconWrap.wrap} onPress={onPress}>
        {icon}
        <Text style={{ ...StyledIconWrap.wrapText, color: color }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IconWrap;
