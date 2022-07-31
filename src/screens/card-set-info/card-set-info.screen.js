import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";

const CardSetInfoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

export default CardSetInfoScreen;