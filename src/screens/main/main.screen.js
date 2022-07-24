import React from "react";
import DataTableComponent from "./components/data-table.component";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "../settings/settings.screen";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CardSet" component={DataTableComponent} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

  )
}

export default MainScreen;