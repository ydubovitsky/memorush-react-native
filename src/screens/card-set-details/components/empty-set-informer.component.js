import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptySetInformerComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oops, nothing here.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

export default EmptySetInformerComponent;