import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { StyledMetrix } from "../../styles/componets";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "../../libs";
import { tradedata } from "../../constant/trades";
import Trades from "./Trades";
import { getAccountTrades } from "../../helper/get";

const TradingJournal = ({ metrix, trades }) => {
  const renderItem = ({ item }) => <Trades trade={item} />;

  return (
    <View style={StyledMetrix.tjournalContainer}>
      <View style={StyledMetrix.objectiveHeader}>
        <Text style={StyledMetrix.objectiveHeaderText}>Trading Objective</Text>
        <TouchableOpacity style={StyledMetrix.addTsection}>
          <Ionicons name="ios-add-circle-outline" size={25} color="#fff" />
          <Text style={StyledMetrix.addText}>Add trade</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={StyledMetrix.tradeDetailsContainer}>
        <Text style={StyledMetrix.detailsText}>Type</Text>
        <Text style={StyledMetrix.detailsText}>Lots</Text>
        <Text style={StyledMetrix.detailsText}>Symbol</Text>
        <Text style={StyledMetrix.detailsText}>Profit</Text>
        <Text style={StyledMetrix.detailsText}>Edit</Text>
      </View>
      <Divider />
      {/* <FlatList
        data={trades}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
      /> */}
      {trades.map((trade, index) => (
        <Trades trade={trade} key={index} />
      ))}
    </View>
  );
};

export default TradingJournal;
