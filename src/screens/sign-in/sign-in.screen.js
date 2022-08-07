import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import ButtonComponent from "../../components/sign-in/button.component";
import TextInputComponent from "../../components/sign-in/text-input.component";
import { authSelector, login } from "../../redux/features/auth/auth-slice";
import { useSelector, useDispatch } from "react-redux";

const IMAGE_PATH = "../../../assets/images/logo/logo.png";

const SignInScreen = (props) => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const { authEntity, error, status } = useSelector(authSelector);

  useEffect(() => {
    if (status === "login") {
      props.navigation.navigate("MainTabNavigation");
    }
  }, [status])

  const formInputHandler = ({ name, value }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onLoginFormHandler = () => {
    dispatch(login(formData));
  }

  return (
    <ImgBackgroundComponent>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.tinyLogo}
              source={require(IMAGE_PATH)}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <Text>Username</Text>
            <TextInputComponent
              placeholder="Username"
              name="username"
              formInputHandler={formInputHandler}
              style={styles.materialStackedLabelTextbox2}
            >
            </TextInputComponent>
            <Text>Password</Text>
            <TextInputComponent
              placeholder="Password"
              name="password"
              formInputHandler={formInputHandler}
              style={styles.materialStackedLabelTextbox3}
            >
            </TextInputComponent>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonComponent
              style={styles.button}
              name="Sign In"
              onClickHandler={onLoginFormHandler}
            >
            </ButtonComponent>
            <ButtonComponent
              style={styles.button}
              name="Registration"
              onClickHandler={() => props.navigation.navigate("RegistrationScreen")}
            >
            </ButtonComponent>
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
  logoContainer: {
    flex: 5,
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
    justifyContent: "flex-end",
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
