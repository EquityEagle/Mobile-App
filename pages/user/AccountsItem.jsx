import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyledDash } from "../../styles/dashboard";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { saveId } from "../../redux/accounts";
import { getEquity } from "../../libs/functions/metrix";

const AccountsItem = ({ account }) => {
  const trades = account.trades;
  const navigation = useNavigation();
  const [toggled, setToggled] = useState(false);
  const dispatch = useDispatch();
  const equity = getEquity(trades, account.accountsize);
  return (
    <View style={StyledDash.accountContainer}>
      <View style={StyledDash.accounts}>
        <View style={StyledDash.accountHeader}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={StyledDash.accountHeaderText}
          >
            Account: {account?.accounttype}
          </Text>
          {toggled && (
            <TouchableOpacity
              onPress={() => setToggled(!toggled)}
              style={StyledDash.toggle}
            >
              <Text style={StyledDash.visibleText}>Visible</Text>
              <FontAwesome name="toggle-off" size={24} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
        {toggled ? null : (
          <View style={StyledDash.balanceCont}>
            <Text style={StyledDash.innerText}>
              Account size:
              <Text style={StyledDash.balanceText}> {account.accountsize}</Text>
            </Text>
            <Text style={StyledDash.innerText}>
              Equity:
              <Text style={StyledDash.balanceText}> {equity?.toFixed(2)}</Text>
            </Text>
          </View>
        )}
        {toggled ? null : (
          <View style={StyledDash.accountHeader}>
            <TouchableOpacity
              onPress={() => {
                dispatch(saveId(account.accounthash));
                navigation.navigate("Metrix");
              }}
              style={StyledDash.flex}
            >
              <AntDesign
                name="linechart"
                size={24}
                color="blue"
                style={StyledDash.chartMetrx}
              />
              <Text style={StyledDash.metrixText}>Metrix</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setToggled(!toggled)}
              style={StyledDash.toggle}
            >
              <>
                <Text style={StyledDash.visibleText}>Visible</Text>
                <FontAwesome name="toggle-on" size={24} color="blue" />
              </>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default AccountsItem;
