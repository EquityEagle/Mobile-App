import React from "react";
import { StyleSheet, View } from "react-native";
import { PriceChart } from "../../libs";

const MetrixChart = () => {
  return (
    <View style={chartStyle.conatiner}>
      <PriceChart />
    </View>
  );
};

const chartStyle = StyleSheet.create({
  conatiner: {
    position: "relative",
    width: "100%",
  },
});

export default MetrixChart;
