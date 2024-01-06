import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyledModal } from "../../styles/componets";
import { Ionicons } from "@expo/vector-icons";
import { useJournalModal } from "../../hook";
import { BottomActionSheet } from "../../modals";
import { Button, InputsWithLabel } from "../../libs";
import { useDispatch, useSelector } from "react-redux";
import { SaveTrack } from "../../redux/accounts";

const JournalModal = () => {
  const journamodal = useJournalModal();
  const open = journamodal.isOpen;
  const userid = useSelector((state) => state.AUTH.id);
  const accState = useSelector((state) => state.ACC);
  const dispatch = useDispatch();
  const isLoading = accState.TRACK_STATUS === "Pending";

  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (userid) {
      setUserId(userid);
    } else {
      console.log("No userId found");
    }
  }, [userid]);

  function close() {
    journamodal.onClose();
  }

  const [data, setData] = useState({
    userId: userId,
    accountsize: "",
    accounttype: "",
  });

  function track() {
    dispatch(SaveTrack(data, userId));
    setTimeout(() => {
      setData((prev) => ({
        ...prev,
        accountsize: "",
        accounttype: "",
      }));
    }, 3000);
  }

  const body = (
    <View style={{ ...StyledModal.container, gap: 20 }}>
      <View style={StyledModal.header}>
        <Text style={StyledModal.headerText}>Journal</Text>
        <TouchableOpacity onPress={close}>
          <Ionicons name="ios-close" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <InputsWithLabel
        infoText="Account Type"
        hasInfo
        value={data.accounttype}
        onChange={(value) => setData({ ...data, accounttype: value })}
      />
      <InputsWithLabel
        infoText="Account Size"
        value={data.accountsize}
        onChange={(value) => setData({ ...data, accountsize: value })}
      />
      <Button
        text="Save"
        isLoading={isLoading}
        disabled={isLoading}
        onPress={track}
      />
    </View>
  );

  return (
    <>
      {open && (
        <BottomActionSheet isVisible={open} onClose={close} body={body} />
      )}
    </>
  );
};

export default JournalModal;
