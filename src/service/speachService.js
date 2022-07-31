import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { Icon } from 'react-native-elements'

const SpeakComponent = ({ text }) => {
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <Icon
        name='campaign'
        type='material'
        onPress={() => speak()}
      />
    </View>
  );
}

export default SpeakComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});