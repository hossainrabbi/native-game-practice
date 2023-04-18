import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from "../constants/colors";

type StartGameScreenProps = {
  handlePickNumber: (number: number) => void;
};

export default function StartGameScreen({
  handlePickNumber,
}: StartGameScreenProps) {
  const [numberItem, setNumberItem] = useState("");

  // handle submit confirm
  const handleSubmitGame = () => {
    const enteredNumber = parseInt(numberItem);

    if (
      isNaN(enteredNumber) ||
      enteredNumber <= 0 ||
      enteredNumber > 99 ||
      !numberItem
    ) {
      return Alert.alert(
        "Invalid Number!",
        "The number must be a number between 1 and 99.",
        [{ style: "destructive", text: "Ok" }]
      );
    }

    handlePickNumber(enteredNumber);
  };

  // handle reset
  const handleReset = () => {
    setNumberItem("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={numberItem}
          onChangeText={(text) => setNumberItem(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, { paddingRight: 5 }]}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={[styles.buttonContainer, , { paddingLeft: 5 }]}>
            <PrimaryButton onPress={handleSubmitGame}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  numberInput: {
    fontSize: 32,
    height: 50,
    width: 50,
    textAlign: "center",
    color: colors.accent500,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    fontWeight: "bold",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
