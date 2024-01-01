import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { StyledMetrix } from "../../styles/componets";
import { Divider } from "../../libs";
import { getAccountTrades } from "../../helper/get";
import {
  calWinrate,
  getAverageLoss,
  getAverageProfit,
  getEquity,
  getLots,
  getRRR,
} from "../../libs/functions/metrix";

const Statistics = ({ metrix }) => {
  const balance = metrix.balance;
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

  const totalTrade = trades.length;
  const equity = getEquity(trades, balance);
  const avaP = getAverageProfit(trades);
  const avaL = getAverageLoss(trades);
  const totalLots = getLots(trades);
  const winRate = calWinrate(trades);
  const avaRRR = getRRR(trades);
  return (
    <View style={StyledMetrix.objective}>
      <View style={StyledMetrix.objectiveHeader}>
        <Text style={StyledMetrix.objectiveHeaderText}>Statistics</Text>
      </View>
      <View style={StyledMetrix.objectiveHeader}>
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={StyledMetrix.objectiveText}>Equity:</Text>
          <Text style={StyledMetrix.objectiveResultText}>
            {equity?.toLocaleString()}
          </Text>
        </View>
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={StyledMetrix.objectiveText}>No. of trades:</Text>
          <Text style={StyledMetrix.objectiveResultText}>
            {totalTrade?.toLocaleString()}
          </Text>
        </View>
      </View>
      <Divider />
      <View style={StyledMetrix.objectiveHeader}>
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={StyledMetrix.objectiveText}>Lots:</Text>
          <Text style={StyledMetrix.objectiveResultText}>{totalLots}</Text>
        </View>
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={StyledMetrix.objectiveText}>Average profit:</Text>
          <Text style={StyledMetrix.objectiveProfit}>
            ${avaP?.toLocaleString()}
          </Text>
        </View>
      </View>
      <Divider />
      <View style={StyledMetrix.objectiveHeader}>
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={StyledMetrix.objectiveText}>Win rate:</Text>
          <Text style={StyledMetrix.objectiveResultText}>{winRate}%</Text>
        </View>
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={StyledMetrix.objectiveText}>Average loss:</Text>
          <Text style={StyledMetrix.objectiveLost}>
            -${avaL?.toLocaleString()}
          </Text>
        </View>
      </View>
      <Divider />
      <View style={StyledMetrix.objectiveHeader}>
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={StyledMetrix.objectiveText}>Average RRR:</Text>
          <Text style={StyledMetrix.objectiveResultText}>{avaRRR}</Text>
        </View>
      </View>
    </View>
  );
};

export default Statistics;
