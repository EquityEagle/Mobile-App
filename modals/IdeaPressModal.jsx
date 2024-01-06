import React, { useState } from "react";
import { ActionModal } from "../libs";
import { useIdeaPressModal } from "../hook";
import {
  ActivityIndicator,
  PermissionsAndroid,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { StyledModal } from "../styles/componets";
import { FontAwesome5 } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
// import moment from "moment";

const IdeaPressModal = ({ itemImage, itemId }) => {
  const presssmodal = useIdeaPressModal();
  const open = presssmodal.isOpen;
  const [saving, setSaving] = useState(false);

  function close() {
    presssmodal.onClose();
  }

  const saveToLibrary = async () => {
    // setSaving(true);
    // // let date = moment().format("YYYYMMDDhhmmss");
    // // let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
    // try {
    //   const res = await FileSystem.downloadAsync(itemImage, fileUri);
    //   saveFile(res.uri);
    //   ToastAndroid.show("Save!", ToastAndroid.SHORT);
    //   alert("Image saved!");
    // } catch (error) {
    //   console.error("Error saving image to phone:", error);
    //   ToastAndroid.show(error.message, ToastAndroid.SHORT);
    // } finally {
    //   setSaving(false);
    // }
    ToastAndroid.show("Coming soon", ToastAndroid.SHORT);
  };

  const body = (
    <View style={{ ...StyledModal.container, gap: 20 }}>
      <TouchableOpacity style={styled.click}>
        <FontAwesome5
          name="brain"
          size={24}
          color={globalStyles.colors.neutral500}
        />
        <Text style={styled.text}>View Idea</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styled.click} onPress={saveToLibrary}>
        <Feather
          name="download"
          size={24}
          color={globalStyles.colors.neutral500}
        />
        <Text style={styled.text}>Save Photo</Text>
        {saving && (
          <ActivityIndicator
            color="#fff"
            style={{ position: "absolute", left: 5 }}
            size={25}
          />
        )}
      </TouchableOpacity>
    </View>
  );

  return <ActionModal isVisible={open} onClose={close} body={body} />;
};

const styled = StyleSheet.create({
  click: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
  },
});

export default IdeaPressModal;
