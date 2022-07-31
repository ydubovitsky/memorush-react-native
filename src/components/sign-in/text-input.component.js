import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputComponent = (props) => {

  const [text, onChangeText] = React.useState();

  return (
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="white" 
        value={text}
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
