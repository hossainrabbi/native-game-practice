import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    borderRadius: 8,
    // Android for shadow =>
    elevation: 4,
    // IOS shadow =>
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    // <= IOS shadow
    backgroundColor: colors.primary500,
    justifyContent: "center",
    alignItems: "center",
  },
});
