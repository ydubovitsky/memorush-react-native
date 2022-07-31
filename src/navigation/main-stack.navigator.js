import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CardSetListScreen from '../screens/card-set-list/card-set-list.screen';
import SettingsScreen from '../screens/settings/settings.screen';
import SignInScreen from '../screens/sign-in/sign-in.screen';
import StartLoaderScreen from '../screens/start-loader/start-loader.screen';
import ImgBackgroundComponent from '../common/components/img-background/img-background.component';
import CardSetDetailsScreen from '../screens/card-set-details/card-set-details.screen';
import LearnCardSetScreen from '../screens/learn-card-set/learn-card-set.screen';
import { Icon } from 'react-native-elements'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => (
  <ImgBackgroundComponent>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartLoaderScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartLoaderScreen" component={StartLoaderScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        {/* //! Inner navigation below*/}
        <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
        <Stack.Screen name="CardSetDetailsTabNavigation" component={CardSetDetailsTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  </ImgBackgroundComponent>
);

const MainTabNavigation = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen
      name="Cards"
      component={CardSetListScreen}
      options={{
        tabBarIcon: () => (
          <Icon
            name='style'
            type='material'
            color='silver'
            size={30}
          />
        )
      }} />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: () => (
          <Icon
            name='settings'
            type='material'
            color='silver'
            size={30}
          />
        )
      }}
    />
  </Tab.Navigator>
)


const CardSetDetailsTabNavigation = (args) => {

  //TODO Упростить это место!
  const { cardSetId, cardSetName } = args.route.params;

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={cardSetName}
        component={CardSetDetailsScreen}
        initialParams={{ cardSetId }}
        options={{
          tabBarIcon: () => (
            //TODO Иконку поменять!
            <Icon
              name='book'
              type='font-awesome'
              color='silver'
              size={30}
            />
          )
        }} />
      <Tab.Screen
        name="Learn"
        component={LearnCardSetScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name='school'
              type='material'
              color='silver'
              size={30}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MainStackNavigator;