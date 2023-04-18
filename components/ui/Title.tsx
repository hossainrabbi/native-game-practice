import React from "react";
import { StyleSheet, Text } from "react-native";

type TitlePropsType = {
  children: React.ReactNode;
};

export default function Title({ children }: TitlePropsType) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "#ffffff",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
});
