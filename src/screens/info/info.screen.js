import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import { A } from '@expo/html-elements';

const InfoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <Text style={styles.text}>
            Memorush are effective tools for both learning and studying when they’re used correctly.
          </Text>
          <Text style={styles.text}>
            Whether it's memorizing for a test or learning a new language, Memorush app helps you learn better, not longer.</Text>
          <Text style={styles.text}>
            Whether you’re a student or a life-long learner, flashcards are a terrific way to remember information and keep the mind sharp.</Text>
          <Text style={styles.text}>
            For more information, visit our website:</Text>
          <Text style={styles.link}>
            <A href="https://memorush.ru">www.memorush.ru</A>
          </Text>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

//TODO Стилизовать нормально
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: "flex-start",
    backgroundColor: "white",
    justifyContent: "space-around",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
    minWidth: 88,
  },
  text: {
    textAlign: "left",
    fontSize: 20
  },
  link: {
    textAlign: "left",
    color: "#28A0DC",
    textDecorationLine: "underline",
    fontSize: 22
  }
});

export default InfoScreen;