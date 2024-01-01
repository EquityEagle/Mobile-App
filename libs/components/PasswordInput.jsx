import React, { useEffect, useState } from "react";
import { styledemailinput } from "../styles/styled";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordInput = ({ value, onChange }) => {
  const [type, setType] = useState("password");
  const [isPassword, setIsPassword] = useState(true);

  useEffect(() => {
    if (!isPassword) {
      setType("text");
    } else {
      setType("password");
    }
  }, [isPassword]);

  return (
    <View style={styledemailinput.passwordInputContainer}>
      <TextInput
        style={styledemailinput.passwordInput}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry={isPassword}
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
        {type === "password" ? (
          <Ionicons name="eye" size={24} color="#fff" />
        ) : (
          <Ionicons name="eye-off" size={24} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
