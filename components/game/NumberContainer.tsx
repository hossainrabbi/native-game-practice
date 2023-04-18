import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

type NumberContainerPropsType = {
  children: React.ReactNode;
};

export default function NumberContainer({
  children,
}: NumberContainerPropsType) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
