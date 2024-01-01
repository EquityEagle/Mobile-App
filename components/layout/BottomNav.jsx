import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { StyledNav } from "../../styles/componets";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { changePageName } from "../../redux/functions";
import { BottomActionSheet } from "../../modals";
import CreateModalNode from "../modal/CreateModalNode";
import { useCreateModal } from "../../hook";

const BottomNav = () => {
  const navigation = useNavigation();
  const userLoaded = useSelector((state) => state.AUTH.userLoaded);
  const dispatch = useDispatch();
  const pageState = useSelector((state) => state.FUN.pageName);
  const dashPage = pageState === "Dash";
  const ideasPage = pageState === "Ideas";
  const chatsPage = pageState === "Chats";
  const createmodal = useCreateModal();

  function goToIdeas() {
    navigation.navigate("Ideas");
    dispatch(changePageName("Ideas"));
  }

  function goToChats() {
    navigation.navigate("Chats");
    dispatch(changePageName("Chats"));
  }

  function goToDash() {
    navigation.navigate("DashBoard");
    dispatch(changePageName("Dash"));
  }

  const isVisible = createmodal.isOpen;

  const showBottomSheet = () => {
    createmodal.onOpen();
  };

  const hideBottomSheet = () => {
    createmodal.onClose();
  };

  return (
    <>
      {userLoaded && (
        <View style={StyledNav.container}>
          <TouchableOpacity onPress={goToIdeas} style={StyledNav.navContainer}>
            <FontAwesome5
              name="brain"
              size={25}
              color={ideasPage ? "blue" : "#fff"}
            />
            <Text
              style={{
                ...StyledNav.navText,
                color: ideasPage ? "blue" : "#fff",
              }}
            >
              Ideas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToChats} style={StyledNav.navContainer}>
            <MaterialIcons
              name="chat"
              size={30}
              color={chatsPage ? "blue" : "#fff"}
            />
            <Text
              style={{
                ...StyledNav.navText,
                color: chatsPage ? "blue" : "#fff",
              }}
            >
              Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StyledNav.navContainer}
            onPress={showBottomSheet}
          >
            <Ionicons name="create" size={35} color="#fff" />
            <Text
              style={{
                ...StyledNav.navText,
                color: "#fff",
              }}
            >
              Create
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToDash} style={StyledNav.navContainer}>
            <MaterialIcons
              name="dashboard"
              size={30}
              color={dashPage ? "blue" : "#fff"}
            />
            <Text
              style={{
                ...StyledNav.navText,
                color: dashPage ? "blue" : "#fff",
              }}
            >
              Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <BottomActionSheet
        isVisible={isVisible}
        onClose={hideBottomSheet}
        body={<CreateModalNode close={hideBottomSheet} />}
      />
    </>
  );
};

export default BottomNav;
