import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
import { authSelector, login } from "../../redux/features/auth/auth-slice";
import ButtonComponent from "../../common/components/button/button.component";
import TextInputComponent from "./atomic-components/text-input.component";

const IMAGE_PATH = "./images/adaptive-icon.png";

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.tinyLogo}
            source={require(IMAGE_PATH)}
          />
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView>
            <View style={styles.inputTextContainer}>
              <Text>Имя пользователя</Text>
              <TextInputComponent
                placeholder="Имя пользователя"
                name="username"
                formInputHandler={formInputHandler}
              >
              </TextInputComponent>
              <Text>Пароль</Text>
              <TextInputComponent
                placeholder="Пароль"
                name="password"
                formInputHandler={formInputHandler}
              >
              </TextInputComponent>
            </View>
            <View style={styles.buttonsContainer}>
              <ButtonComponent
                style={[styles.button]}
                name="Войти"
                onClickHandler={onLoginFormHandler}
              >
              </ButtonComponent>
              <ButtonComponent
                style={styles.button}
                name="Зарегистрироваться"
                onClickHandler={() => props.navigation.navigate("RegistrationScreen")}
              >
              </ButtonComponent>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10%",
  },
  logoContainer: {
    flex: 1,
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
  scrollViewContainer: {
    flex: 1,
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
    height: 35,
    marginBottom: 10
  },
  text: {
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default SignInScreen;
