import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { StyledMetrix } from "../../styles/componets";
import TradingObjection from "./TradingObjection";
import Statistics from "./Statistics";
import TradingJournal from "./TradingJournal";
import MetrixChart from "./MetrixChart";

const MetrixContainer = () => {
  const metrix = useSelector((state) => state.ACC.METRIX);

  return (
    <View style={StyledMetrix.container}>
      <MetrixChart />
      <View style={{ padding: 12, gap: 10 }}>
        <TradingObjection metrix={metrix} />
        <Statistics metrix={metrix} />
      </View>
      <TradingJournal metrix={metrix} />
    </View>
  );
};

export default MetrixContainer;
