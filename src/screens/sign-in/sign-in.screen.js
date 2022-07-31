import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Ellipse } from "react-native-svg";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import ButtonComponent from "../../components/sign-in/button.component";
import TextInputComponent from "../../components/sign-in/text-input.component";

const IMAGE_PATH = "../../../assets/images/logo.png";

const SignInScreen = (props) => {
  return (
    <ImgBackgroundComponent>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.ellipseContainer}>
            {/* <Svg viewBox="0 0 230.82 224.37" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(255,255,255,1)"
                strokeWidth={4}
                fill="rgba(24,187,241,1)"
                cx={115}
                cy={112}
                rx={113}
                ry={110}
              ></Ellipse>
            </Svg> */}
            <Image

              style={styles.tinyLogo}
              source={require(IMAGE_PATH)}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInputComponent
              placeholder="USERNAME"
              style={styles.materialStackedLabelTextbox2}
            ></TextInputComponent>
            <TextInputComponent
              placeholder="PASSWORD"
              style={styles.materialStackedLabelTextbox3}
            ></TextInputComponent>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonComponent
              style={styles.button}
              name="Sign In"
            ></ButtonComponent>
            <ButtonComponent
              style={styles.button}
              name="Try it without registration"
              onClickHandler={() => props.navigation.navigate("MainTabNavigation")}
            ></ButtonComponent>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Don`t have account? Sign up!</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImgBackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10%",
  },
  ellipseContainer: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
  inputTextContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    justifyContent: 'space-around',
    marginBottom: 5
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    justifyContent: 'space-around'
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    height: "25%"
  },
  text: {
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default SignInScreen;
