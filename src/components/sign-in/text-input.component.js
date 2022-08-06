import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputComponent = ({placeholder, formInputHandler, name}) => {


  return (
      <TextInput
        style={styles.input}
        onChangeText={(text) => formInputHandler({name, value: text})}
        placeholder={placeholder}
        placeholderTextColor="white" 
      />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 2,
    color: "white",
    borderColor: "#18BBF1",
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
});

export default TextInputComponent;
