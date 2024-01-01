import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { StyledDash } from "../../styles/dashboard";
import { useSelector } from "react-redux";
import { AccountContainer } from "../../components";
import { globalStyles } from "../../styles/global";

const DashBoard = () => {
  const user = useSelector((state) => state.AUTH);

  return (
    <ScrollView style={{ backgroundColor: globalStyles.colors.bg }}>
      <SafeAreaView style={StyledDash.container}>
        <Text style={StyledDash.userName}>Hi, {user.name}</Text>
        <Text style={StyledDash.innerText}>Trading Accounts</Text>
        <AccountContainer />
      </SafeAreaView>
    </ScrollView>
  );
};

export default DashBoard;
