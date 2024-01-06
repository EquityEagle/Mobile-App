import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { StyledActionModal } from "../../modals/styled";

const ActionModal = ({ isVisible, onClose, body }) => {
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
        </View>
      </View>
    </Modal>
  );
};

export default ActionModal;
