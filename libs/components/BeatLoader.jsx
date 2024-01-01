import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const BeatLoader = () => {
  const loaders = Array.from({ length: 3 }, (_, index) => index); // Array for loaders
  const scaleValues = loaders.map(() => new Animated.Value(1));

  const animateLoader = () => {
    loaders.forEach((_, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 300), // Adjust the delay based on the index
          Animated.timing(scaleValues[index], {
            toValue: 1.5, // Scale up
            duration: 300, // Animation duration
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValues[index], {
            toValue: 1, // Scale back to original size
            duration: 300, // Animation duration
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 } // Infinite loop
      ).start();
    });
  };

  useEffect(() => {
    animateLoader();
  }, []);

  const renderLoaders = loaders.map((_, index) => {
    const animatedStyles = {
      transform: [{ scale: scaleValues[index] }],
    };
    return (
      <Animated.View key={index} style={[styles.loader, animatedStyles]} />
    );
  });

  return <View style={styles.container}>{renderLoaders}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loader: {
    width: 5,
    height: 25,
    backgroundColor: `#fff`,
    borderRadius: 1,
  },
});

export default BeatLoader;
