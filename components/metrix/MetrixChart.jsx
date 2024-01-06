import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { PriceChart } from "../../libs";
import { getAccountsProfitData } from "../../helper/get";

const MetrixChart = ({ metrixId }) => {
  useEffect(() => {
    const gettrades = async () => {
      const data = await getAccountsProfitData(metrixId);
      setProfitData(data);
    };
    if (metrixId) {
      gettrades();
    } else return;
  }, [metrixId]);

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
