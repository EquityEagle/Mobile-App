import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../helper/uri";
import { ToastAndroid } from "react-native";

const initialState = {
  IDEAS: [],
  VIEWD_IDEA: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
  PUBLISH_STATUS: null,
  PUBLISH_ERROR: null,
  VIEWD_STATUS: null,
  VIEWD_ERROR: null,
  COMMENT_STATUS: null,
  COMMENT_ERROR: null,
};

export const getSetups = createAsyncThunk("setup/all", async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/setup`);
    return response?.data;
  } catch (error) {
    console.log(error.response.data);
    ToastAndroid.show(
      error.response?.data || error.message,
      ToastAndroid.SHORT
    );
  }
});

export const publishSetup = createAsyncThunk("setup/publish", async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/setup/new/${data.userId}/idea`,
      {
        desc: data.desc,
        image: data.image,
        // video: data.video,
        pair: data.pair,
        type: data.type,
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

export const viewSetup = createAsyncThunk("setup/view", async (data) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/setup/${data.setupId}/${data.userId}/one`
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

export const commentSetup = createAsyncThunk("setup/comment", async (data) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/setup/${data.setupId}/${data.userId}/comment`,
      {
        desc: data.desc,
        image: data.image,
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

const IdeaSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(publishSetup.pending, (state, action) => {
      return { ...state, PUBLISH_STATUS: "Loading" };
    });
    builder.addCase(publishSetup.fulfilled, (state, action) => {
      const newIdeas = [action.payload, ...state.IDEAS];
      ToastAndroid.show("Idea shared", ToastAndroid.SHORT);
      return { ...state, IDEAS: newIdeas, PUBLISH_STATUS: "Success" };
    });
    builder.addCase(publishSetup.rejected, (state, action) => {
      return {
        ...state,
        PUBLISH_STATUS: "Rejected",
        PUBLISH_ERROR: action.payload,
      };
    });
    builder.addCase(getSetups.pending, (state, action) => {
      return { ...state, FETCH_STATUS: "Loading" };
    });
    builder.addCase(getSetups.fulfilled, (state, action) => {
      return { ...state, IDEAS: action.payload, FETCH_STATUS: "Success" };
    });
    builder.addCase(getSetups.rejected, (state, action) => {
      return {
        ...state,
        FETCH_STATUS: "Rejected",
        FETCH_ERROR: action.payload,
      };
    });
    builder.addCase(viewSetup.pending, (state, action) => {
      return { ...state, VIEWD_STATUS: "Loading" };
    });
    builder.addCase(viewSetup.fulfilled, (state, action) => {
      return { ...state, VIEWD_IDEA: action.payload, VIEWD_STATUS: "Success" };
    });
    builder.addCase(viewSetup.rejected, (state, action) => {
      return {
        ...state,
        VIEWD_STATUS: "Rejected",
        VIEWD_ERROR: action.payload,
      };
    });
  },
});

export default IdeaSlice.reducer;
