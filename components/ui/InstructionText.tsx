import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import colors from "../../constants/colors";

type InstructionTextProps = {
  children: React.ReactNode;
  style?: TextStyle;
};

export default function InstructionText({
  children,
  style,
}: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: colors.accent500,
    fontFamily: "open-sans",
  },
});
