import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { styledauth } from "../../styles/Auth";
import { Button, EmailInput, PasswordInput } from "../../libs";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../redux/authSlice";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.AUTH);
  const isLoading = authState.loginStatus === "Loading";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (authState.id) {
      navigation.navigate("DashBoard");
    } else {
      console.log("no token");
    }
  }, [authState.id]);

  function Login() {
    dispatch(loginAsync(user));
  }

  return (
    <SafeAreaView style={styledauth.container}>
      <StatusBar style="auto" />
      <View style={styledauth.innerContainer}>
        <Text style={styledauth.authText}>Welcome back</Text>
        <EmailInput
          value={user.email}
          onChange={(value) => setUser({ ...user, email: value })}
        />
        <PasswordInput
          value={user.password}
          onChange={(value) => setUser({ ...user, password: value })}
        />
        <Button
          text="Login"
          onPress={Login}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <View style={styledauth.optionTextContainer}>
          <Text style={styledauth.optionText}>Don't have an accoount?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styledauth.optionTextLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
