import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styledInputL } from "../styles/styled";
import { Ionicons } from "@expo/vector-icons";
import CustomTitle from "./CustomTitle";

const InputsWithLabel = ({ infoText, title, value, onChange, hasInfo }) => {
  const [Hovered, setHovered] = useState(false);
  return (
    <View style={styledInputL.container}>
      <View style={styledInputL.infoHeader}>
        <Text style={styledInputL.infoText}>{infoText}</Text>
        {hasInfo && (
          <View style={styledBtn.info}>
            <TouchableOpacity onPress={() => setHovered(!Hovered)}>
              <Ionicons name="ios-information-circle" size={18} color="#fff" />
            </TouchableOpacity>
            {Hovered && <CustomTitle title="Demo, Propm firm or live acc" />}
          </View>
        )}
      </View>
      <TextInput
        style={styledInputL.input}
        value={value}
        onChangeText={onChange}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styledBtn = StyleSheet.create({
  info: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
  },
});

export default InputsWithLabel;
