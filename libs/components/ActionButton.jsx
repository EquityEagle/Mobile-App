import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StyledIdeas } from "../../styles/componets";
import IconWrap from "./IconWrap";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { formatNumberWithK } from "../functions";
import { useViewsModal } from "../../hook";
import { getSetupActions } from "../../helper/get";
import { useSelector } from "react-redux";
import { LikeSetup, StarSetup } from "../../helper/post";
import { useNavigation } from "@react-navigation/native";

const ActionButton = ({ ideaId }) => {
  const [actiondata, setActiondata] = useState([]);
  const userId = useSelector((state) => state.AUTH.id);
  const viewmodal = useViewsModal();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchLikes = async () => {
      const ldata = await getSetupActions(ideaId);
      setActiondata(ldata);
    };
    fetchLikes();
  }, [actiondata]);

  const Liked = actiondata.likes;
  const liked = Liked?.includes(userId);
  const stared = actiondata.star?.includes(userId);

  const likes = actiondata.likes?.length || 0;
  const comments = actiondata.comments?.length || 0;
  const views = actiondata.views?.length || 0;
  const star = actiondata.star?.length || 0;

  const formattedLikes = formatNumberWithK(likes);
  const formattedComments = formatNumberWithK(comments);
  const formattedStars = formatNumberWithK(star);
  const formattedViews = formatNumberWithK(views);

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

  const starIcon = (
    <>
      {stared ? (
        <AntDesign name="star" size={25} color="yellow" />
      ) : (
        <AntDesign name="staro" size={25} color="yellow" />
      )}
    </>
  );

  async function likeIdea() {
    await LikeSetup(ideaId, userId);
  }

  // function goToSetup() {
  //   if (path.pathname === `/ideas/statusId/${ideaId}`) {
  //     return null;
  //   } else {
  //     navigate(`/ideas/statusId/${ideaId}`);
  //   }
  // }

  async function starIdea() {
    await StarSetup(ideaId, userId);
  }

  return (
    <View style={StyledIdeas.actionButtonsContainer}>
      <IconWrap
        onPress={likeIdea}
        icon={likeIcon}
        text={formattedLikes}
        color={globalStyles.colors.red600}
      />
      <IconWrap
        onPress={starIdea}
        icon={starIcon}
        text={formattedStars}
        color="yellow"
      />
      <IconWrap
        icon={
          <MaterialCommunityIcons
            name="comment-minus"
            size={25}
            color={globalStyles.colors.blue600}
          />
        }
        text={formattedComments}
        color={globalStyles.colors.blue600}
      />
      <IconWrap
        icon={
          <MaterialCommunityIcons name="chart-box" size={25} color="#fff" />
        }
        onPress={viewmodal.onOpen}
        text={formattedViews}
        color="#fff"
      />
    </View>
  );
};

export default ActionButton;
