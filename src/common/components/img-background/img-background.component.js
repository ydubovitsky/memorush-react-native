import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const IMG_PATH = "./images/background.png"

//!TODO Может потом добавить другую
const ImgBackgroundComponent = (props) => (
  <View style={styles.container}>
    <ImageBackground
      source={require(IMG_PATH)}
      resizeMode="cover"
      style={styles.image}
    >
      {props.children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  image: {
    flex: 1,
    justifyContent: "center",
  }
});

export default ImgBackgroundComponent;