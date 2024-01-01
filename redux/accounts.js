import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";
import { BASE_URL } from "../helper/uri";
import axios from "axios";

const initialState = {
  ACCOUNTS: [],
  METRIX: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
  METRIX_STATUS: null,
  METRIX_ERROR: null,
  TRACK_STATUS: null,
  TRACK_ERROR: null,
  visible: [],
  Ids: "",
};

export const SaveTrack = createAsyncThunk("account/track", async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/metrix/track/${data.userId}`,
      {
        userId: data.userId,
        accountsize: data.accountsize,
        accounttype: data.accounttype,
      }
    );
    return response?.data;
  } catch (error) {
    console.log(error.response.data);
    ToastAndroid.show(
      error.response?.data || error.message,
      ToastAndroid.SHORT
    );
  }
});

export const findAllAccount = createAsyncThunk(
  "account/find",
  async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/metrix/find/${userId}/all`);
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      ToastAndroid.show(
        error.response?.data || error.message,
        ToastAndroid.SHORT
      );
    }
  }
);

export const findAccountMetrix = createAsyncThunk("account", async (Ids) => {
  try {
    const response = await axios.get(`${BASE_URL}/metrix/find/${Ids}/one`);
    return response?.data;
  } catch (error) {
    console.log(error.response.data);
    ToastAndroid.show(
      error.response?.data || error.message,
      ToastAndroid.SHORT
    );
  }
});

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    saveId: (state, action) => {
      state.Ids = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SaveTrack.pending, (state, action) => {
      return { ...state, TRACK_STATUS: "Pending" };
    });
    builder.addCase(SaveTrack.fulfilled, (state, action) => {
      ToastAndroid.show("Account saved", ToastAndroid.SHORT);
      return {
        ...state,
        TRACK_STATUS: "Success",
        ACCOUNTS: [action.payload, ...state.ACCOUNTS],
      };
    });
    builder.addCase(SaveTrack.rejected, (state, action) => {
      return {
        ...state,
        TRACK_STATUS: "Rejected",
        TRACK_ERROR: action.payload,
      };
    });
    builder.addCase(findAllAccount.pending, (state, action) => {
      ToastAndroid.show("Retrieveing accounts", ToastAndroid.SHORT);
      return { ...state, FETCH_STATUS: "Loading" };
    });
    builder.addCase(findAllAccount.fulfilled, (state, action) => {
      if (!action.payload) {
        ToastAndroid.show("No account found", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Accounts retrieved", ToastAndroid.SHORT);
      }
      return { ...state, FETCH_STATUS: "Success", ACCOUNTS: action.payload };
    });
    builder.addCase(findAllAccount.rejected, (state, action) => {
      return {
        ...state,
        FETCH_STATUS: "Rejected",
        FETCH_ERROR: action.payload,
      };
    });
    builder.addCase(findAccountMetrix.pending, (state, action) => {
      return { ...state, METRIX_STATUS: "Pending" };
    });
    builder.addCase(findAccountMetrix.fulfilled, (state, action) => {
      return { ...state, METRIX_STATUS: "Success", METRIX: action.payload };
    });
    builder.addCase(findAccountMetrix.rejected, (state, action) => {
      return {
        ...state,
        METRIX_STATUS: "Rejected",
        METRIX_ERROR: action.payload,
      };
    });
  },
});

export default accountSlice.reducer;

export const { saveId } = accountSlice.actions;
