import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons"; // Import your desired icon library
import { StyledActionModal } from "./styled";

const BottomActionSheet = ({ isVisible, onClose, body }) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionOutTiming={0}
      onBackdropPress={onClose}
      style={{ margin: 0 }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end", margin: 0 }}>
        <View style={StyledActionModal.container}>
          <View style={StyledActionModal.removeContainer}>
            <View style={StyledActionModal.removeIcon} />
          </View>
          {body}
          {/* <TouchableOpacity onPress={onClose}>
            <Text style={StyledActionModal.closeText}>Cancel</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

export default BottomActionSheet;
