import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonComponent = ({ style, name, onClickHandler }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
    >
      <Text onPress={onClickHandler} style={styles.signIn}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,187,241,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
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
  signIn: {
    color: "#fff",
    fontSize: 14
  }
});

export default ButtonComponent;
