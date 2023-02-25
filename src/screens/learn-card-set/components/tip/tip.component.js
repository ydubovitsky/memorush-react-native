import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonComponent from "../../atomic-components/button/button.component";

const TipComponent = ({ setIsStarted, navigateToCardListHandler }) => {
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
          style={[styles.button, { backgroundColor: "#5EBD6D" }]}
          onClickHandler={() => setIsStarted(true)}
        />
        <ButtonComponent
          name="Go back"
          style={[styles.button, { marginRight: 0 }]}
          onClickHandler={navigateToCardListHandler}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
  },
  textContainer: {
    flex: 7,
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "left"
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginRight: 5,
  }
})

export default TipComponent;
