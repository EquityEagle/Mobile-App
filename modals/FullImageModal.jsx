import React from "react";
import { View, Image, StyleSheet, Modal } from "react-native";

const FullImageModal = ({ isVisible, imageUrl, onClose }) => {
  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default FullImageModal;
