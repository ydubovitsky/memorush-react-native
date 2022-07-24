import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DataTableComponent from "./components/data-table.component";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "../settings/settings.screen";
import { getAllCardSets, cardEntitySelector } from "../../redux/features/card-set/card-set.slice";

const Tab = createBottomTabNavigator();

const MainScreen = () => {

  const dispatch = useDispatch();
  const cardEntity = useSelector(cardEntitySelector);

  useEffect(() => {
    dispatch(getAllCardSets());
    console.log(cardEntity);
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen name="CardSet" component={DataTableComponent} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

  )
}

export default MainScreen;