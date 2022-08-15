import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";

const InfoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <Text style={styles.text}>Memorush are effective tools for both learning and studying when they’re used correctly. Whether you’re cramming for a test or learning a new language, Memorush apps help you study smarter, not longer.
          </Text>
          <Text style={styles.text}>
            Whether you’re a student or a life-long learner, flashcards are a terrific way to remember information and keep the mind sharp.</Text>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

//TODO Стилизовать нормально
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
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
    textAlign: "center",
    fontSize: 16
  }
});

export default InfoScreen;