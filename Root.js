import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LoadUser } from "./redux/authSlice";
import { BottomNav, JournalModal } from "./components";

store.dispatch(LoadUser());

const Root = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <App />
        <BottomNav />
        <JournalModal />
      </Provider>
    </NavigationContainer>
  );
};

export default Root;
