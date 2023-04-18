import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [pickNumber, setPickNumber] = useState<null | number>(null);
  const [isGameOver, setIsGameOver] = useState(true);

  const [fontLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const handlePickNumber = (number: number) => {
    setPickNumber(number);
    setIsGameOver(false);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  if (!fontLoading) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#72063c", "#ddb52f"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        imageStyle={styles.bgImage}
        source={require("./assets/images/background.jpg")}
      >
        <SafeAreaView style={styles.rootContainer}>
          {isGameOver && pickNumber ? (
            <GameOverScreen />
          ) : pickNumber ? (
            <GameScreen
              userNumber={pickNumber}
              handleGameOver={handleGameOver}
            />
          ) : (
            <StartGameScreen handlePickNumber={handlePickNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15,
  },
});
