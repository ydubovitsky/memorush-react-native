import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import ButtonComponent from "../button/button.component";

const DEFAULT_IMAGE_PATH = "../../../../assets/images/congratulation/congratulation.gif"

const CongratulationComponent = ({ setInitialStateHandler, navigateToCardListHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require(DEFAULT_IMAGE_PATH)}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Congratulation! You learned all words from this set!</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          style={styles.button}
          name="Go Back"
          onClickHandler={navigateToCardListHandler}
        />
        <ButtonComponent
          style={[styles.button, {backgroundColor: "#5EBD6D"}]}
          name="Repeat Again"
          onClickHandler={setInitialStateHandler}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 7,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    margin: 5,
    borderRadius: 20
  }
})

export default CongratulationComponent;
