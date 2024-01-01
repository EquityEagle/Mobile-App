import React from "react";
import { TextInput } from "react-native";
import { styledemailinput } from "../styles/styled";

const Inputs = ({ placeholder, value, onChange }) => {
  return (
    <TextInput
      style={styledemailinput.emailInput}
      placeholder={placeholder}
      onChangeText={onChange}
      type="text"
      placeholderTextColor="#fff"
    />
  );
};

export default Inputs;
