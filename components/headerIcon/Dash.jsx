import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/authSlice";
import { EELogo, placeholderImg } from "../../assets";

const Dash = () => {
  const auth = useSelector((state) => state.AUTH);
  const dispatch = useDispatch();
  return (
    <View>
      {auth.id ? (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => dispatch(logOut())}
        >
          <Feather name="log-out" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <Text>""</Text>
      )}
    </View>
  );
};

export const DashImg = () => {
  const auth = useSelector((state) => state.AUTH);
  return (
    <TouchableOpacity style={{ flexDirection: "row" }}>
      <Image
        source={auth.profile?.url ? { uri: auth.profile.url } : placeholderImg}
        style={{ borderRadius: 9999, width: 40, height: 40, marginLeft: 20 }}
      />
      {/* <HeaderTitle /> */}
    </TouchableOpacity>
  );
};

export default Dash;

export const HeaderTitle = () => {
  return (
    <View style={{ position: "relative", width: "100%" }}>
      {/* <Image
        source={require("../../assets/ee-logo.png")}
        style={{ width: 30, height: 30, marginRight: 8 }}
      /> */}
      <Text style={{ color: "#fff", fontWeight: "500" }}>Equity</Text>
      <Text
        style={{
          color: "blue",
          fontWeight: "500",
        }}
      >
        Eagle
      </Text>
    </View>
  );
};
