import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StyledIdeas } from "../../styles/componets";
import { useSelector } from "react-redux";
import { globalStyles } from "../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { formatNumberWithK } from "../functions";
import { getSetupCommentLikes } from "../../helper/get";
import { LikeSetupcomments } from "../../helper/post";
import IconWrap from "./IconWrap";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const CommentActionButton = ({ commet }) => {
  const commentId = commet._id;
  const userId = useSelector((state) => state.AUTH.id);
  const [Likes, setLikes] = useState([]);
  useEffect(() => {
    const getlikes = async () => {
      const data = await getSetupCommentLikes(commentId);
      setLikes(data);
    };
    getlikes();
  }, [Likes]);

  async function likeSetupComments() {
    await LikeSetupcomments(commentId, userId);
  }

  const likes = Likes?.length;
  const formattedLikes = formatNumberWithK(likes);
  const liked = Likes.includes(userId);

  const likeIcon = (
    <>
      {liked ? (
        <Ionicons name="heart" size={25} color={globalStyles.colors.red600} />
      ) : (
        <Ionicons
          name="heart-outline"
          size={25}
          color={globalStyles.colors.red600}
        />
      )}
    </>
  );

  return (
    <View style={StyledIdeas.actionButtonsContainer}>
      <IconWrap
        onPress={likeSetupComments}
        icon={likeIcon}
        text={formattedLikes}
        color={globalStyles.colors.red600}
      />
      <IconWrap
        icon={<FontAwesome name="share-square-o" size={24} color="#fff" />}
      />
      <IconWrap icon={<FontAwesome name="send-o" size={24} color="#fff" />} />
      <IconWrap
        icon={<FontAwesome name="bookmark-o" size={24} color="#fff" />}
      />
    </View>
  );
};

export default CommentActionButton;
