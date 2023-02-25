import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { cutStringIfLengthMoreThan } from "../../../../../../utils/string.utils";

const FavoritesSetListItem = ({ item, navigation }) => {

  const {
    id,
    name
  } = item;

  const navigateHandler = () => {
    navigation.navigate(
      "CardSetDetailsTabNavigation",
      {
        cardSetId: id,
        cardSetName: name
      })
  }

  return (
    <TouchableOpacity
      onPress={navigateHandler}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cutStringIfLengthMoreThan(15, name)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginRight: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    width: 100,
    height: 100,
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
  },
  text: {
    fontSize: 20,
    textAlignVertical: 'top',
    textShadowColor: 'silver',
  }
})

export default FavoritesSetListItem;