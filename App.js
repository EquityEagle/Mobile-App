import { StyleSheet, ToastAndroid } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Chat,
  DashBoard,
  Idea,
  Login,
  Mertix,
  Register,
  ViewedItem,
} from "./pages";
import { BottomNav, Dash } from "./components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "./styles/global";
import { findAllAccount } from "./redux/accounts";
import * as SplashScreen from "expo-splash-screen";
import { DashImg, HeaderTitle, IdeaLeft } from "./components/headerIcon/Dash";

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 3000);

const Stack = createStackNavigator();

export default function App() {
  const navigation = useNavigation();
  const auth = useSelector((state) => state.AUTH);
  const dispatch = useDispatch();
  const userId = auth.id;

  useEffect(() => {
    if (auth.userLoaded) {
      navigation.navigate("DashBoard");
    } else {
      navigation.navigate("Login");
    }
  }, [auth.userLoaded]);

  // useEffect(() => {
  //   if (auth.userLoaded) {
  //     dispatch(findAllAccount(userId));
  //   } else {
  //     return ToastAndroid.show("Login to see accounts", ToastAndroid.SHORT);
  //   }
  // }, [auth.userLoaded]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        options={{
          title: <HeaderTitle />,
          headerTitleAlign: "center",
          headerRight: () => <Dash />,
          headerLeft: () => <DashImg />,
          headerStyle: { backgroundColor: "#000" },
          headerShadowVisible: true,
        }}
        component={DashBoard}
      />
      <Stack.Screen
        name="Ideas"
        options={{
          title: <HeaderTitle />,
          headerTitleAlign: "center",
          headerLeft: () => <DashImg />,
          headerStyle: { backgroundColor: "#000" },
          headerShadowVisible: true,
        }}
        component={Idea}
      />
      <Stack.Screen name="Chats" options={{ title: "" }} component={Chat} />
      <Stack.Screen
        name="Idea"
        options={{
          title: "Idea",
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: { color: "#fff" },
          headerLeft: () => <IdeaLeft />,
        }}
        component={ViewedItem}
      />
      <Stack.Screen
        name="Metrix"
        options={{
          title: <HeaderTitle />,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#000" },
          headerShadowVisible: true,
          headerLeftContainerStyle: { backgroundColor: "#fff" },
        }}
        component={Mertix}
      />
      <Stack.Screen name="Login" options={{ title: "" }} component={Login} />
      <Stack.Screen
        name="SignUp"
        options={{ title: "" }}
        component={Register}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.91)",
  },
});
