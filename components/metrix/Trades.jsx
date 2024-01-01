import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyledMetrix } from "../../styles/componets";
import { globalStyles } from "../../styles/global";
import { Feather } from "@expo/vector-icons";

const Trades = ({ trade }) => {
  return (
    <TouchableOpacity style={StyledMetrix.objectiveHeader}>
      <Text
        style={{
          color:
            trade.type === "BUY"
              ? globalStyles.colors.green500
              : globalStyles.colors.red500,
        }}
      >
        {trade.type}
      </Text>
      <Text style={StyledMetrix.objectiveResultText}>{trade.lotSize}</Text>
      <Text style={StyledMetrix.objectiveResultText}>{trade.symbol}</Text>
      <Text
        style={{
          ...StyledMetrix.objectiveResultText,
          color:
            trade.loss !== 0
              ? globalStyles.colors.red500
              : trade.profit !== 0
              ? globalStyles.colors.green500
              : "",
        }}
      >
        {trade.loss !== 0 ? "-" : ""}
        {trade.profit !== 0 ? trade.profit : trade.loss !== 0 ? trade.loss : 0}
      </Text>
      <TouchableOpacity>
        <Feather name="edit" size={25} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Trades;
