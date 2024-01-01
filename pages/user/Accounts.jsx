import React from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AccountsItem from "./AccountsItem";
import { AccountContainer } from "../../components";

const Accounts = () => {
  return (
    <SafeAreaView style={styledContainer.container}>
      <AccountContainer />
    </SafeAreaView>
  );
};

const styledContainer = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    height: "100%",
  },
});

export default Accounts;
