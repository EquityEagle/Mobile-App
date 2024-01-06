import React from "react";
import { ActionModal } from "../libs";
import { Text, TouchableOpacity, View } from "react-native";
import { useViewsModal } from "../hook";
import { StyledModal } from "../styles/componets";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const ViewsModal = () => {
  const viewmodal = useViewsModal();
  const open = viewmodal.isOpen;

  function close() {
    viewmodal.onClose();
  }

  const body = (
    <View style={{ ...StyledModal.container, gap: 20 }}>
      <View style={StyledModal.header}>
        <Text style={{ ...StyledModal.headerText, fontSize: 25 }}>Views</Text>
        <TouchableOpacity onPress={close}>
          <Ionicons name="ios-close" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: globalStyles.colors.neutral500,
          fontWeight: "400",
          fontSize: 14,
        }}
      >
        Times this idea was seen
      </Text>
    </View>
  );

  return <ActionModal body={body} isVisible={open} onClose={close} />;
};

export default ViewsModal;
