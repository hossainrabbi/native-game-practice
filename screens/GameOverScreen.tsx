import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";

export default function GameOverScreen() {
  return (
    <View style={styles.root}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
