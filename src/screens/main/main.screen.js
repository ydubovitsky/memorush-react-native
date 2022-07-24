import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import SettingsScreen from "../settings/settings.screen";
import ListAccordionComponent from './components/list-accordion.component';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const MainScreen = () => {

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'space-between' }}
      >
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="CardSet" component={ListAccordionComponent} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default MainScreen;