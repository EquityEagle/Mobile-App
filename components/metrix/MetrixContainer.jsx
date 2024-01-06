import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { StyledMetrix } from "../../styles/componets";
import TradingObjection from "./TradingObjection";
import Statistics from "./Statistics";
import TradingJournal from "./TradingJournal";
import MetrixChart from "./MetrixChart";
import { getAccountTrades } from "../../helper/get";
import MetrixHeader from "./MetrixHeader";

const MetrixContainer = () => {
  const metrix = useSelector((state) => state.ACC.METRIX);

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

  async function reLoad() {
    const data = await getAccountTrades(metrixId);
    setTrades(data);
  }

  return (
    <View style={StyledMetrix.container}>
      <MetrixHeader refreshdata={reLoad} />
      <MetrixChart trades={trades} metrixId={metrixId} />
      <View style={{ padding: 12, gap: 10 }}>
        <TradingObjection metrix={metrix} trades={trades} />
        <Statistics metrix={metrix} trades={trades} balance={balance} />
      </View>
      <TradingJournal metrix={metrix} trades={trades} />
    </View>
  );
};

export default MetrixContainer;
