import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

const MetrixHeader = ({ refreshdata }) => {
  const [refreshing, setRreshing] = useState(false);

  async function refresh() {
    setRreshing(true);
    await refreshdata();
    setRreshing(false);
  }

  return (
    <View style={styled.container}>
      <TouchableOpacity onPress={refresh}>
        {refreshing ? (
          <ActivityIndicator color="#fff" size={30} />
        ) : (
          <Feather name="refresh-cw" size={24} color="#fff" />
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="share-square-o" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="trash-2" size={24} color={globalStyles.colors.red600} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="settings" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    // padding: 10,
    flexDirection: "row",
    gap: 60,
    position: "relative",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export default MetrixHeader;
