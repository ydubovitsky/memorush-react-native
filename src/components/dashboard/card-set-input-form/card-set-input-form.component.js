import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

const CardSetInputForm = ({ cardSetEntityFormInputHandler, values }) => {
  return (
    <View style={styles.container}>
      <Text>CREATE A NEW FLASHCARD SET</Text>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Title"
        value={values.title}
        onChangeText={text => cardSetEntityFormInputHandler("title", text)}
      />
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Tags(Optional, comma separated)"
        value={values.tags}
        onChangeText={text => cardSetEntityFormInputHandler("tags", text)}
      />
      <TextInput
        mode="outlined"
        style={[styles.input, styles.description]}
        label="Description"
        value={values.description}
        onChangeText={text => cardSetEntityFormInputHandler("description", text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
  description: {
    minHeight: 100
  }
})

export default CardSetInputForm;