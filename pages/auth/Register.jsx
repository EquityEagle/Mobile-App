import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styledauth } from "../../styles/Auth";
import { Button, EmailInput, Inputs, PasswordInput } from "../../libs";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.AUTH);
  // const isLoading = regStatus === "Loading";

  useEffect(() => {
    if (authState.id) {
      navigation.navigate("DashBoard");
    } else {
      console.log("no token");
    }
  }, [authState.id]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  function Reg() {
    // register(user);
  }

  return (
    <SafeAreaView>
      <SafeAreaView style={styledauth.container}>
        <StatusBar style="auto" />
        <View style={styledauth.innerContainer}>
          <Text style={styledauth.authText}>Create your account</Text>
          <Inputs
            placeholder="Name"
            value={user.name}
            onChange={(value) => setUser({ ...user, name: value })}
          />
          <Inputs
            placeholder="Username"
            value={user.username}
            onChange={(value) => setUser({ ...user, username: value })}
          />
          <EmailInput
            value={user.email}
            onChange={(value) => setUser({ ...user, email: value })}
          />
          <PasswordInput
            value={user.password}
            onChange={(value) => setUser({ ...user, password: value })}
          />
          <Button
            text="Sign up"
            isLoading={isLoading}
            disabled={isLoading}
            onPress={Reg}
          />
          <View style={styledauth.optionTextContainer}>
            <Text style={styledauth.optionText}>Already have an accoount?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styledauth.optionTextLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Register;
