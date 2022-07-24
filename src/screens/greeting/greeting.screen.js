import React from "react";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import ButtonComponent from "./components/button.component";

const GreetingScreen = ({ navigation }) => {

  const goToMainScreen = () => {
    navigation.navigate("Main")
  }

  return (
    <ImgBackgroundComponent>
      <ButtonComponent handler={goToMainScreen} />
    </ImgBackgroundComponent>
  )
}

export default GreetingScreen;