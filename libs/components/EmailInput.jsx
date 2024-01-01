import React from "react";
import { TextInput } from "react-native";
import { styledemailinput } from "../styles/styled";

const EmailInput = ({ value, onChange }) => {
  return (
    <TextInput
      style={styledemailinput.emailInput}
      placeholder="Email"
      type="email"
      value={value}
      onChangeText={onChange}
      placeholderTextColor="#fff"
    />
  );
};

export default EmailInput;
