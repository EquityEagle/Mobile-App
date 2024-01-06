import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LoadUser } from "./redux/authSlice";
import { BottomNav, JournalModal } from "./components";
import { getSetups } from "./redux/ideaSlice";
import { IdeaModal, ViewsModal } from "./modals";
import { PaperProvider } from "react-native-paper";

store.dispatch(LoadUser());
store.dispatch(getSetups());

const Root = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <PaperProvider> */}
        <App />
        <BottomNav />
        <JournalModal />
        <ViewsModal />
        <IdeaModal />
        {/* </PaperProvider>s */}
      </Provider>
    </NavigationContainer>
  );
};

export default Root;
