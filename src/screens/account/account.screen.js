import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { Avatar, HelperText, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import ImgBackgroundComponent from "../../common/components/img-background/img-background.component";
import { authEntitySelector, updateUserData } from "../../redux/features/auth/auth-slice";
import ButtonComponent from "../../common/components/button/button.component";

const AccountScreen = () => {

  const dispatch = useDispatch();
  const { username } = useSelector(authEntitySelector);

  const [passwordEntity, setPasswordEntity] = useState({
    oldPassword: '',
    newPassword: '',
    passwordConfirm: '',
  })

  const updateUserDataHandler = () => {
    dispatch(updateUserData({
      password: passwordEntity.newPassword,
      password2: passwordEntity.passwordConfirm
    }))
  }

  const validatePasswordHandler = () => {
    return passwordEntity.newPassword !== passwordEntity.passwordConfirm || passwordEntity.newPassword.length < 7 ? 1 : 0;
  }

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
          <View style={styles.scrollViewContainer}>
            <ScrollView>
              <View style={styles.settingsLabel}>
                <Text style={styles.settingsLabelText}>Settings</Text>
              </View>
              <View style={styles.accountSettings}>
                <Text>Old password</Text>
                <TextInput onChangeText={text => setPasswordEntity({
                  ...passwordEntity,
                  oldPassword: text
                })} />
                <Text>New password</Text>
                <TextInput onChangeText={text => setPasswordEntity({
                  ...passwordEntity,
                  newPassword: text
                })} />
                <Text>Confirm password</Text>
                <TextInput onChangeText={text => setPasswordEntity({
                  ...passwordEntity,
                  passwordConfirm: text
                })} />
                <HelperText type="error" visible={validatePasswordHandler()}>
                  Password must be more than 8 characters
                </HelperText>
                <ButtonComponent onClickHandler={updateUserDataHandler} name="Update" style={styles.button}/>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImgBackgroundComponent>
    </SafeAreaView >
  )
}

//TODO Стилизовать нормально
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  accountInfo: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  userTitle: {
    fontSize: 30,
    padding: 10,
  },
  scrollViewContainer: {
    flex: 1.5,
  },
  settingsLabel: {
    alignItems: "center",
  },
  settingsLabelText: {
    fontSize: 20
  },
  accountSettings: {
    flex: 2,
    padding: 10,
  },
  button: {
    height: 35,
    marginBottom: 10
  },
})

export default AccountScreen;