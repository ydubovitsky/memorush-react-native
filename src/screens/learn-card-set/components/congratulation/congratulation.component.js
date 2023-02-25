import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import ButtonComponent from "../../atomic-components/button/button.component";

const DEFAULT_IMAGE_PATH = "./images/10519-confetti-customized.gif"

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
            <Text style={styles.text}>Congratulation! You have learned all words from this set!</Text>
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
          style={[styles.button, {backgroundColor: "#5EBD6D", marginRight: 0}]}
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
    fontSize: 30,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginRight: 5,
  }
})

export default CongratulationComponent;
