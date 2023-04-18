import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

export default function PrimaryButton({
  children,
  onPress,
}: PrimaryButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonPressAble, styles.pressed]
            : styles.buttonPressAble
        }
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    overflow: "hidden",
    borderRadius: 28,
  },
  buttonPressAble: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary700,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.9,
  },
});
