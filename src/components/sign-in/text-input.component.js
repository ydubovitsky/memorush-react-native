import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputComponent = ({placeholder, formInputHandler, name}) => {


  return (
      <TextInput
        style={styles.input}
        onChangeText={(text) => formInputHandler({name, value: text})}
        placeholder={placeholder}
      />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#18BBF1",
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10
  },
});

export default TextInputComponent;
