import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StyledIdeaCInput } from "../../styles/componets";
import { Divider } from "../../libs";
import { placeholderImg } from "../../assets";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import { commentSetup } from "../../redux/ideaSlice";

const CommentInput = ({ idea }) => {
  const auth = useSelector((state) => state.AUTH);
  const load = useSelector((state) => state.Idea);
  const loading = load.COMMENT_STATUS === "loading";
  const dispatch = useDispatch();

  const [data, setData] = useState({
    setupId: idea._id,
    userId: auth.id,
    desc: "",
    image: "",
  });

  async function share() {
    dispatch(commentSetup(data));
    setTimeout(() => {
      setData({ ...data, desc: "" });
      //   setPhoto("");
    }, 3000);
  }

  return (
    <View style={StyledIdeaCInput.container}>
      <Divider />
      <View style={StyledIdeaCInput.InputCont}>
        <Image
          source={
            auth?.profile?.url ? { uri: auth?.profile?.url } : placeholderImg
          }
          style={{ borderRadius: 9999, width: 40, height: 40 }}
        />
        <TextInput
          placeholder="Leave a comment"
          placeholderTextColor="#fff"
          style={StyledIdeaCInput.input}
          multiline
          value={data.desc}
          onChangeText={(value) => setData({ ...data, desc: value })}
        />
      </View>
      <View style={StyledIdeaCInput.InputCont}>
        <View style={StyledIdeaCInput.icons}>
          <TouchableOpacity>
            <FontAwesome
              name="camera"
              size={20}
              color={globalStyles.colors.blue600}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              name="video"
              size={20}
              color={globalStyles.colors.blue600}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="multitrack-audio"
              size={20}
              color={globalStyles.colors.blue600}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={20}
              color={globalStyles.colors.blue600}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={share} style={StyledIdeaCInput.button}>
          {loading ? (
            <ActivityIndicator color="#fff" size={20} />
          ) : (
            <Text style={StyledIdeaCInput.text}>Share</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentInput;
