import React, {useEffect} from "react";
import { StyleSheet, View, Image } from "react-native";

const StartLoaderScreen = (props) => {

  setTimeout(() => {
    props.navigation.navigate("SignInScreen")
  }, 5000);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/start-loader.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  image: {
    flex: 1,
    width: "100%"
  }
});

export default StartLoaderScreen;
