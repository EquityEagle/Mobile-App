import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { styledbtn } from "../styles/styled";
import BeatLoader from "./BeatLoader";
// import { BeatLoader } from "react-spinners";

const Button = ({ text, disabled, isLoading, onPress, size }) => {
  return (
    <TouchableOpacity
      style={styledbtn.container}
      disabled={disabled}
      onPress={onPress}
    >
      {isLoading ? (
        // <BeatLoader />
        <ActivityIndicator color="#fff" size={30} />
      ) : (
        <Text style={styledbtn.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
