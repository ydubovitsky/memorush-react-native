import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonComponent = ({ style, name, onClickHandler, color, isDisabled=false }) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.container, style, { backgroundColor: color }]}
      onPress={onClickHandler}
    >
      <Text numberOfLines={1} style={styles.text}>{name}</Text>
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
    textAlign: "left",
    color: "#fff",
    fontSize: 16,
  }
});

export default ButtonComponent;
