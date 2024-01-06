import React, { useCallback, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, Text } from "react-native";
import { StyledDash } from "../../styles/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { AccountContainer } from "../../components";
import { globalStyles } from "../../styles/global";
import { findAllAccount } from "../../redux/accounts";

const DashBoard = () => {
  const user = useSelector((state) => state.AUTH);

  const userId = user.id;

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(findAllAccount(userId));
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ backgroundColor: globalStyles.colors.bg }}
    >
      <SafeAreaView style={StyledDash.container}>
        <Text style={StyledDash.userName}>Hi, {user.name}</Text>
        <Text style={StyledDash.innerText}>Trading Accounts</Text>
        <AccountContainer />
      </SafeAreaView>
    </ScrollView>
  );
};

export default DashBoard;
