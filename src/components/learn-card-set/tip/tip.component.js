import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonComponent from "../button/button.component";

const TipComponent = ({ setIsStarted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>How does this work?!</Text>
        <Text style={styles.text}>1. Look at a card. When you are ready, click the "See Answer" button.</Text>
        <Text style={styles.text}>2. You can see a backside of each card if click on it</Text>
        <Text style={styles.text}>3. Click "I know it!" or "I don`t know it".</Text>
        <Text style={styles.text}>4. When you will learn all cards, you will see congratulation popup</Text>
        <Text style={styles.text}>5. In the end you can repeat one more time or return to main menu</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonComponent
          name="Start"
          style={styles.button}
          onClickHandler={() => setIsStarted(true)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 5,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    justifyContent: 'space-around'
  },
  button: {
    height: "33%"
  }
})

export default TipComponent;
