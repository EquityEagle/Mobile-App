import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accountReducer from "./accounts";
import functionReducer from "./functions";
import ideaReducer from "./ideaSlice";

export const store = configureStore({
  reducer: {
    AUTH: authReducer,
    ACC: accountReducer,
    FUN: functionReducer,
    Idea: ideaReducer,
  },
});
