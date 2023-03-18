import React, { useCallback } from "react";
import { REACT_APP_OFFICIAL_SITE_URL } from "@env"
import { StyleSheet, View, Text, Linking } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";

const InfoScreen = () => {

  const openWebsiteInBrowserHandler = useCallback(async () => {
    const supported = await Linking.canOpenURL(REACT_APP_OFFICIAL_SITE_URL);
    if (supported) {
      await Linking.openURL(REACT_APP_OFFICIAL_SITE_URL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${REACT_APP_OFFICIAL_SITE_URL}`);
    }
  }, [REACT_APP_OFFICIAL_SITE_URL]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <Text style={styles.text}>
            Memorush — это эффективные инструменты как для обучения, так и для учебы, если их правильно использовать.
          </Text>
          <Text style={styles.text}>
            Флэш-карты — невероятно полезный инструмент, помогающий запомнить все. Вы должны использовать их, независимо от того, учитесь ли вы программировать, готовитесь к экзамену или даже делаете публичные выступления.</Text>
          <Text style={styles.text}>
            Независимо от того, являетесь ли вы студентом или учитесь всю жизнь, карточки — отличный способ запомнить информацию и сохранить остроту ума.</Text>
          <Text style={styles.text}>
            Для более детальной информации, посетите наш официальный веб сайт:</Text>
          <Text style={styles.link} onPress={openWebsiteInBrowserHandler}>
            https://memorush.ru
          </Text>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

//TODO Стилизовать нормально
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: "flex-start",
    backgroundColor: "white",
    justifyContent: "space-around",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
    minWidth: 88,
  },
  text: {
    textAlign: "left",
    fontSize: 17
  },
  link: {
    textAlign: "left",
    color: "#28A0DC",
    textDecorationLine: "underline",
    fontSize: 17
  }
});

export default InfoScreen;