import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';

const CardSetInputForm = ({ cardSetEntityFormInputHandler, values }) => {

  const validateTitleHandler = () => {
    return values.name.length == 0;
  }

  const validateCategoryHandler = () => {
    return values.categoryName.length == 0;
  }

  return (
    <View style={styles.container}>
      <Text>CREATE A NEW FLASHCARD SET</Text>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Title"
        value={values.name}
        onChangeText={text => cardSetEntityFormInputHandler("name", text)}
      />
      <HelperText type="error" visible={validateTitleHandler()}>
        Title length must be greater than 0
      </HelperText>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Category"
        value={values.categoryName}
        onChangeText={text => cardSetEntityFormInputHandler("categoryName", text)}
      />
      <HelperText type="error" visible={validateCategoryHandler()}>
        Category name must be greater than 0
      </HelperText>
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
    borderRadius: 10,
    padding: 10,
  },
  description: {
    minHeight: 100
  }
})

export default CardSetInputForm;