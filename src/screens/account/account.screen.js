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
            <Text style={styles.userTitle}>Hello, {username}</Text>
          </View>
          <View style={styles.statistic}>
            <Text>You have {cardEntity.length} card sets in your pocket!</Text>
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
    borderRadius: 20
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
  }
})

export default AccountScreen;