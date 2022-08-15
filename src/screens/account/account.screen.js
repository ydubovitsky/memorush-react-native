import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import { useSelector } from "react-redux";
import { authEntitySelector } from "../../redux/features/auth/auth-slice";
import { cardEntitySelector } from "../../redux/features/card-set/card-set.slice";

const AccountScreen = () => {

  const { username } = useSelector(authEntitySelector);
  const cardEntity = useSelector(cardEntitySelector);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ImgBackgroundComponent>
        <View style={styles.container}>
          <View style={styles.accountInfo}>
            <Avatar.Icon
              size={100}
              icon="account"
              backgroundColor="#24B9E9"
            />
            <Text style={styles.userTitle}>Hello 👋, {username}!</Text>
          </View>
          <View style={styles.statistic}>
            <Text style={styles.text}>You have {cardEntity.length} CardSets in your pocket!</Text>
            <Text style={styles.text}>🥳</Text>
          </View>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView>
  )
}

//TODO Стилизовать нормально
const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
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
  accountInfo: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userTitle: {
    fontSize: 30,
    padding: 20,
  },
  statistic: {
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16
  }
})

export default AccountScreen;