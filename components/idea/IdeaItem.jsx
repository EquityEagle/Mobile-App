import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StyledIdeas } from "../../styles/componets";
import { placeholderImg } from "../../assets";
import { Entypo } from "@expo/vector-icons";
import { ActionButton, Divider } from "../../libs";
import { formatTimestamp } from "../../libs/functions";
import { FullImageModal, IdeaPressModal } from "../../modals";
import { useIdeaPressModal } from "../../hook";

const IdeaItem = ({ idea }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const pressmoal = useIdeaPressModal();
  //   console.log("idea:", idea.image);
  return (
    <View style={StyledIdeas.ideaContainer}>
      <View style={StyledIdeas.header}>
        <View style={StyledIdeas.infoWrap}>
          <TouchableOpacity>
            <Image
              source={
                idea?.profile?.url
                  ? { uri: idea?.profile?.url }
                  : placeholderImg
              }
              style={{ borderRadius: 9999, width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <View>
            <Text style={StyledIdeas.infoText}>{idea?.username}</Text>
            <Text style={StyledIdeas.infoTextDate}>
              {formatTimestamp(idea.createdAt)}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Divider />
      <TouchableOpacity>
        <View style={StyledIdeas.details}>
          <Text style={StyledIdeas.pairText}>{idea.pair}</Text>
          <Text style={StyledIdeas.detailsText}>{idea.desc}</Text>
        </View>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => setModalVisible(true)}
          onLongPress={pressmoal.onOpen}
        >
          <Image source={{ uri: idea.image }} style={StyledIdeas.detailsImg} />
        </TouchableOpacity>
      </TouchableOpacity>
      <FullImageModal
        isVisible={modalVisible}
        imageUrl={idea.image}
        onClose={() => setModalVisible(false)}
      />
      <ActionButton ideaId={idea._id} />
      <IdeaPressModal itemId={idea._id} itemImage={idea.image} />
    </View>
  );
};

export default IdeaItem;
