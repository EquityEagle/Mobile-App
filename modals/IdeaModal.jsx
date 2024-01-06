import React, { useEffect, useState } from "react";
import { ActionModal, Button, PairSelect } from "../libs";
import { useIdeaModal } from "../hook";
import { StyleSheet, TextInput, View } from "react-native";
import { StyledModal } from "../styles/componets";
import Pairs from "../libs/components/Pairs";
import { useDispatch, useSelector } from "react-redux";
import { publishSetup } from "../redux/ideaSlice";

const IdeaModal = () => {
  const ideamodal = useIdeaModal();
  const userid = useSelector((state) => state.AUTH.id);
  const open = ideamodal.isOpen;
  const ideaState = useSelector((state) => state.Idea);
  const isLoading = ideaState.PUBLISH_STATUS === "Loading";
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(userid || "");

  useEffect(() => {
    if (userid) {
      setUserId(userid);
    } else {
      console.log("No userId found");
    }
  });

  const [data, setData] = useState({
    userId: userId,
    desc: "",
    image: "",
    pair: "",
    type: "",
  });

  console.log("data:", data);

  function close() {
    ideamodal.onClose();
  }

  function submit() {
    dispatch(publishSetup(data));
  }

  const body = (
    <View style={{ ...StyledModal.container, gap: 20 }}>
      <PairSelect hasType data={data} setData={setData} />
      <TextInput
        placeholder="Description"
        placeholderTextColor="#fff"
        style={styled.input}
        multiline
        value={data.desc}
        onChangeText={(value) => setData({ ...data, desc: value })}
      />

      <Button
        text="Submit"
        isLoading={isLoading}
        disabled={isLoading}
        onPress={submit}
      />
    </View>
  );

  return <ActionModal isVisible={open} onClose={close} body={body} />;
};

const styled = StyleSheet.create({
  input: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: " rgb(30 41 59)",
    fontWeight: "400",
    color: "#fff",
  },
});

export default IdeaModal;
