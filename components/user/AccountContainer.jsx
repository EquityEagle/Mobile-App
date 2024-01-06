import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AccountsItem from "../../pages/user/AccountsItem";
import { useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";

const AccountContainer = () => {
  const user = useSelector((state) => state.AUTH);
  const accState = useSelector((state) => state.ACC);
  const userId = user.id;
  const empty = accState.ACCOUNTS?.length === 0;
  const isLoading = accState.FETCH_STATUS === "Loading";
  const accountMap = accState.ACCOUNTS;

  const renderItem = ({ item }) => <AccountsItem account={item} />;

  return (
    <View style={styledContainer.container}>
      {isLoading ? (
        <ActivityIndicator
          color="#fff"
          size={40}
          style={styledContainer.load}
        />
      ) : empty ? (
        <Text></Text>
      ) : (
        accountMap &&
        accountMap.map((acc, index) => (
          <AccountsItem account={acc} key={index} />
        ))
      )}
    </View>
  );
};

const styledContainer = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    height: "auto",
    gap: 20,
    flexDirection: "column",
    display: "flex",
  },
  load: {
    justifyContent: "center",
    height: 500,
  },
});

export default AccountContainer;
{
  /* <FlatList
data={accountMap}
keyExtractor={(item) => item._id?.toString()}
renderItem={renderItem}
/> */
}
