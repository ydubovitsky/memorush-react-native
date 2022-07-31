import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const DEFAULT_IMAGE_PATH = "../../../../assets/images/flash-card-set-cover-one.jpg";

const FavoritesSetListItem = () => (
  <View
    style={styles.container}
  >
    <View style={styles.description}>
      <ImageBackground
        source={require(DEFAULT_IMAGE_PATH)}
        resizeMode="cover"
        imageStyle={{ borderRadius: 25 }}
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Inside</Text>
        </View>
      </ImageBackground>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    flex: 1,
    margin: 5,
    width: 100,
    height: 100
  },
  image: {
    width: 100,
    height: 100
  },
  textContainer: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
  },
  text: {
    fontSize: 20,
    textAlignVertical: 'top',
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
})

export default FavoritesSetListItem;