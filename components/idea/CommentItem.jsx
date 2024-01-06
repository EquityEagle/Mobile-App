import React from "react";
import { Image, Text, View } from "react-native";
import { CommentActionButton, Divider } from "../../libs";
import { StyledIdeaCInput } from "../../styles/componets";
import { placeholderImg } from "../../assets";
import { formatDate } from "../../libs/functions";

const CommentItem = ({ comment }) => {
  const timestamp = new Date(comment.createdAt);
  const formattedDate = formatDate(timestamp);
  return (
    <View>
      <Divider />
      <View style={StyledIdeaCInput.infoHeader}>
        <Image
          source={
            comment?.profile?.url
              ? { uri: comment?.profile?.url }
              : placeholderImg
          }
          style={{ borderRadius: 9999, width: 40, height: 40 }}
        />
        <View>
          <Text style={StyledIdeaCInput.username}>{comment.username}</Text>
          <Text style={StyledIdeaCInput.timeForm}>{formattedDate}</Text>
        </View>
      </View>
      <View style={StyledIdeaCInput.descCon}>
        <Text style={StyledIdeaCInput.desc}>{comment.desc}</Text>
      </View>
      <CommentActionButton commet={comment} />
    </View>
  );
};

export default CommentItem;
