import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { cardByIdSelector } from "../../redux/features/card-set/card-set.slice";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";

const CardSetInfoScreen = ({ route, navigation }) => {

  const { cardSetId } = route.params;
  const {
    title,
    isFavorite,
    createdAt,
    updatedAt,
    flashCardArray
  } = useSelector(state => cardByIdSelector(state, cardSetId));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <Text style={styles.text}>Title: {title}</Text>
          <Text style={styles.text}>Count of flashcards: {flashCardArray.length}</Text>
          <Text style={styles.text}>Is favorite: {isFavorite ? "Yes" : "No"}</Text>
          <Text style={styles.text}>Created at: {createdAt}</Text>
          <Text style={styles.text}>Updated at: {updatedAt}</Text>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

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

export default CardSetInfoScreen;