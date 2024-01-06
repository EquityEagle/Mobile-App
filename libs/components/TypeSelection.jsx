import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/global";

const TypeSelection = ({ setSelected, setSelectedType }) => {
  return (
    <View style={styled.conatiner}>
      <TouchableOpacity
        onPress={() => {
          setSelected("Buy");
          setSelectedType(false);
        }}
        style={styled.select}
      >
        <Text style={{ ...styled.text, color: globalStyles.colors.green500 }}>
          Buy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected("Sell");
          setSelectedType(false);
        }}
        style={styled.select}
      >
        <Text style={{ ...styled.text, color: globalStyles.colors.red500 }}>
          Sell
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styled = StyleSheet.create({
  conatiner: {
    backgroundColor: globalStyles.colors.neutral800,
    borderRadius: 8,
  },
  select: {
    padding: 15,
  },
  text: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 17,
  },
});

export default TypeSelection;
