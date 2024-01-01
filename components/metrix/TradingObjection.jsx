import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { StyledMetrix } from "../../styles/componets";
import { Divider } from "../../libs";
import { getAccountTrades } from "../../helper/get";
import {
  calTotalLoss,
  calTotalProfit,
  isDrawdownBelowOnePercent,
} from "../../libs/functions/metrix";
import { formatNumberWithK } from "../../libs/functions";

const TradingObjection = ({ metrix }) => {
  const metrixId = metrix._id;
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const gettrades = async () => {
      const data = await getAccountTrades(metrixId);
      setTrades(data);
    };
    if (metrix._id) {
      gettrades();
    } else return;
  }, [trades]);

  const days = metrix.days;
  const loss = calTotalLoss(trades);
  const Profit = calTotalProfit(trades);
  const profit = Profit - loss;
  const balance = metrix.balance;
  const gained = (profit / balance) * 100;
  const lost = (loss / balance) * 100;

  const isDrawdown = isDrawdownBelowOnePercent(trades, balance);

  const formattedloss = formatNumberWithK(loss);
  const formattedprofit = formatNumberWithK(profit);

  return (
    <View style={StyledMetrix.objective}>
      <View style={StyledMetrix.objectiveHeader}>
        <Text style={StyledMetrix.objectiveHeaderText}>Trading Objective</Text>
        <Text style={StyledMetrix.objectiveHeaderText}>Result</Text>
      </View>
      <View style={StyledMetrix.objectiveHeader}>
        <Text style={StyledMetrix.objectiveText}>Trading Days</Text>
        <Text style={StyledMetrix.objectiveResultText}>{days}</Text>
      </View>
      <Divider />
      <View style={StyledMetrix.objectiveHeader}>
        <Text style={StyledMetrix.objectiveText}>Total Profit</Text>
        <Text style={StyledMetrix.objectiveProfit}>
          ${formattedprofit} {`(${gained.toFixed(2)}%)`}
        </Text>
      </View>
      <Divider />
      <View style={StyledMetrix.objectiveHeader}>
        <Text style={StyledMetrix.objectiveText}>Total Lost</Text>
        <Text style={StyledMetrix.objectiveLost}>
          -${formattedloss} {`(-${lost.toFixed(2)}%)`}
        </Text>
      </View>
    </View>
  );
};

export default TradingObjection;
