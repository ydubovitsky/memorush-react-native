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
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

export default EmptySetInformerComponent;