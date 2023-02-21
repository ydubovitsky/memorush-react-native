import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

const CardInputForm = ({ cardSetEntity, setCardSetEntity, id, item }) => {

  const onChangeHandler = (name, value, id) => {
    setCardSetEntity({
      ...cardSetEntity,
      flashCardArray: {
        ...cardSetEntity.flashCardArray,
        [id]: {
          ...cardSetEntity.flashCardArray[id],
          [name]: value
        }
      }
    })
  }

  return (
    <View style={[styles.container]}>
      <Text>Flashcard № {id + 1}</Text>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Front side"
        value={item?.frontSide}
        onChangeText={text => onChangeHandler("frontSide", text, id)}
      />
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Back side"
        value={item?.backSide}
        onChangeText={text => onChangeHandler("backSide", text, id)}
      />
      <TextInput
        mode="outlined"
        style={[styles.input, styles.description]}
        label="Hint"
        value={item?.hint}
        onChangeText={text => onChangeHandler("hint", text, id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 10,
    margin: 10,
    padding: 10
  },
})

export default CardInputForm;