import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonComponent = ({ style, name, onClickHandler }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onClickHandler}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,187,241,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17
  }
});

export default ButtonComponent;
