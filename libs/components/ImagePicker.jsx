import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { StyledImagePicker } from "../styles/styled";
import * as ImageManipulator from "expo-image-manipulator";

const ImageSelector = ({ data, setData }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
      setData({ ...data, image: image });
    }
  }, [image]);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        manipulateImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const manipulateImage = async (uri) => {
    const manipulatedImage = await ImageManipulator.manipulateAsync(
      uri,
      [
        // { resize: { width: 200, height: 200 } },
        // { rotate: 45 },
        // { flip: ImageManipulator.FlipType.Vertical },
      ],
      { compress: 0.5, format: ImageManipulator.SaveFormat.PNG }
    );
    const fileName = manipulatedImage.uri.substring(
      manipulatedImage.uri.lastIndexOf("/") + 1
    );
    setImage(manipulatedImage.uri);
    // console.log("formatted:", manipulatedImage.uri);
  };

  return (
    <View>
      {image ? (
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: image }} style={StyledImagePicker.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={pickImage}
          style={StyledImagePicker.pickContainer}
        >
          <View style={StyledImagePicker.selectCon}>
            <FontAwesome name="camera" size={24} color="#fff" />
            <Text style={StyledImagePicker.selectText}>Select image</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageSelector;
