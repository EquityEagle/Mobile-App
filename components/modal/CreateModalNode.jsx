import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyledModal } from "../../styles/componets";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useCreateModal, useJournalModal } from "../../hook";

const CreateModalNode = ({ close }) => {
  const createmodal = useCreateModal();
  const journalmodal = useJournalModal();

  function openJ() {
    createmodal.onClose();
    journalmodal.onOpen();
  }

  return (
    <View style={StyledModal.container}>
      <View style={StyledModal.header}>
        <Text style={StyledModal.headerText}>Create</Text>
        <TouchableOpacity onPress={close}>
          <Ionicons name="ios-close" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={StyledModal.content}>
        <TouchableOpacity style={StyledModal.contentItem}>
          <FontAwesome5 name="brain" size={20} color="#fff" />
          <Text style={StyledModal.contextText}>Share Idea</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openJ} style={StyledModal.contentItem}>
          <FontAwesome name="pie-chart" size={20} color="blue" />
          <Text style={StyledModal.contextText}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyledModal.contentItem}>
          <FontAwesome name="group" size={20} color="green" />
          <Text style={StyledModal.contextText}>Community</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateModalNode;
