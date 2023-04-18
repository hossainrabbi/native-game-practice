import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

type GameScreenProps = {
  userNumber: number;
  handleGameOver: () => void;
};

function generateRandomNumber(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber,
  handleGameOver,
}: GameScreenProps) {
  const initialValue = useMemo(
    () => generateRandomNumber(minBoundary, maxBoundary, userNumber),
    [userNumber, minBoundary, maxBoundary]
  );
  const [currentGuess, setCurrentGuess] = useState(initialValue);

  useEffect(() => {
    if (userNumber === currentGuess) {
      handleGameOver();
    }
  }, [currentGuess, userNumber, handleGameOver]);

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={{ marginBottom: 24 }}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, { marginRight: 5 }]}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="#ffffff" />
            </PrimaryButton>
          </View>
          <View style={[styles.buttonContainer, { marginLeft: 5 }]}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="#ffffff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
