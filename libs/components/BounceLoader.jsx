import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const BounceLoader = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.5,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []); // Run the animation on component mount

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.loader, { transform: [{ scale }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 40,
    height: 40,
    backgroundColor: "#3498db", // You can customize the color
    borderRadius: 20,
  },
});

export default BounceLoader;
