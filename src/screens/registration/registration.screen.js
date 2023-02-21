import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import ButtonComponent from "../sign-in/atomic-components/button.component";
import TextInputComponent from "../sign-in/atomic-components/text-input.component";
import { authSelector, registration } from "../../redux/features/auth/auth-slice";
import { useSelector, useDispatch } from "react-redux";

const IMAGE_PATH = "../../../assets/images/logo/logo.png";

const RegistrationScreen = (props) => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const { authEntity, error, status } = useSelector(authSelector);

  useEffect(() => {
    if (status === "register") {
      props.navigation.navigate("SignInScreen");
    }
  }, [status])

  const formInputHandler = ({ name, value }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onRegisterFormHandler = () => {
    dispatch(registration(formData));
  }

  return (
    <ImgBackgroundComponent>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.ellipseContainer}>
            <Image
              style={styles.tinyLogo}
              source={require(IMAGE_PATH)}
            />
          </View>
          <View style={styles.scrollViewContainer}>
            <ScrollView>
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
                <Text>Password confirmation</Text>
                <TextInputComponent
                  placeholder="Confirm password"
                  name="password2"
                  formInputHandler={formInputHandler}
                  style={styles.materialStackedLabelTextbox3}
                >
                </TextInputComponent>
                <Text>Email(Optional)</Text>
                <TextInputComponent
                  placeholder="Email"
                  name="email"
                  formInputHandler={formInputHandler}
                  style={styles.materialStackedLabelTextbox3}
                >
                </TextInputComponent>
              </View>
              <View style={styles.buttonsContainer}>
                <ButtonComponent
                  style={styles.button}
                  name="Register"
                  onClickHandler={onRegisterFormHandler}
                >
                </ButtonComponent>
                <ButtonComponent
                  style={styles.button}
                  name="Go back"
                  onClickHandler={() => props.navigation.navigate("SignInScreen")}
                >
                </ButtonComponent>
              </View>
            </ScrollView>
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
  scrollViewContainer: {
    flex: 5
  },
  inputTextContainer: {
    flex: 4,
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

export default RegistrationScreen;
