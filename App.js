import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import MainStackNavigator from './src/navigation/main-stack.navigator';
import store from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainStackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);

