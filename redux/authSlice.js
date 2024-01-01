import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../helper/uri";

export const loginAsync = createAsyncThunk("auth/login", async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login/mobile`, {
      email: user.email,
      password: user.password,
    });
    await SecureStore.setItemAsync("user", JSON.stringify(response?.data));
    return response.data;
  } catch (error) {
    ToastAndroid.show(
      error.response?.data || error.message,
      ToastAndroid.SHORT
    );
    console.error(error.response?.data);
    throw error;
  }
});

export const LoadUser = createAsyncThunk("auth/loadUser", async () => {
  try {
    const userString = await SecureStore.getItemAsync("user");
    if (userString) {
      const user = JSON.parse(userString);
      return {
        name: user.name,
        id: user._id,
        username: user.username,
        profile: user.profile,
        email: user.email,
        userLoaded: true,
      };
    } else {
      console.log("No user data found in SecureStore");
      return {};
    }
  } catch (error) {
    console.error("Error loading user:", error);
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    name: "",
    email: "",
    username: "",
    profile: "",
    loginStatus: null,
    loginError: null,
    regStatus: null,
    regError: null,
    userLoaded: false,
  },
  reducers: {
    logOut: (state) => {
      SecureStore.deleteItemAsync("user");
      ToastAndroid.show(`Logged out`, ToastAndroid.SHORT);
      return {
        ...state,
        token: "",
        name: "",
        id: "",
        username: "",
        profile: "",
        email: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      return { ...state, loginStatus: "Loading" };
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      ToastAndroid.show(
        `Welcome back ${action.payload?.username}`,
        ToastAndroid.SHORT
      );
      return {
        ...state,
        profile: action.payload.profile,
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        username: action.payload.username,
        userLoaded: true,
        loginStatus: "Success",
      };
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      return { ...state, loginStatus: "Rejected", loginError: action.payload };
    });

    builder.addCase(LoadUser.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
