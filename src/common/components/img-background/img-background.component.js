import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const IMG_PATH = "../../../../assets/images/background_two.jpg"

const ImgBackgroundComponent = (props) => (
  <View style={styles.container}>
    <ImageBackground
      source={require(IMG_PATH)}
      resizeMode="stretch"
      style={styles.image}
    >
      {props.children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  }
});

export default ImgBackgroundComponent;