import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StyledIdeaCInput } from "../../styles/componets";
import CommentItem from "./CommentItem";
import { getSetupComments } from "../../helper/get";

const CommentsFeed = ({ idea }) => {
  const [comments, setComments] = useState([]);
  const empty = comments.length === 0;

  useEffect(() => {
    const getcomments = async () => {
      const data = await getSetupComments(idea._id);
      setComments(data);
    };
    getcomments();
  }, [comments]);

  return (
    <View style={StyledIdeaCInput.commentsCon}>
      {comments.map((comment, index) => (
        <CommentItem comment={comment} />
      ))}
    </View>
  );
};

export default CommentsFeed;
