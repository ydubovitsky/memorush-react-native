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

  //!TODO Поправить на фронте и бэке; разные типы данных
  const tagArrayToString = (tagArray) => (
    Array.isArray(tagArray) ? tagArray.join() : ''
  )

  //!TODO Поправить на фронте и бэке; разные типы данных
  const tagStringToArrayBySeparator = (tagString, separator) => (
    tagString.split(separator)
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Создать новый набор карточек</Text>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Название"
        value={values.name}
        onChangeText={text => cardSetEntityFormInputHandler("name", text)}
      />
      <HelperText type="error" visible={validateTitleHandler()}>
        Название должно быть длиннее 0
      </HelperText>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Категория"
        value={values.categoryName}
        //! Вынести в отдельные функции-обработчики
        onChangeText={text => cardSetEntityFormInputHandler("categoryName", text)}
      />
      <HelperText type="error" visible={validateCategoryHandler()}>
      </HelperText>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Тэги(Опционально, через запятую)"
        value={tagArrayToString(values.tags)}
        onChangeText={text => cardSetEntityFormInputHandler("tags", tagStringToArrayBySeparator(text, ","))}
      />
      <TextInput
        mode="outlined"
        style={[styles.input, styles.description]}
        label="Описание"
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
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  description: {
    minHeight: 100
  }
})

export default CardSetInputForm;