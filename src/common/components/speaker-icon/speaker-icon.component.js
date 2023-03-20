import * as Speech from 'expo-speech';
import * as React from 'react';
import { Icon } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const SpeakerIconComponent = ({ text, options = {} }) => {

  const speak = (text, options) => {
    if (text != undefined && text.length > 0 && text != " ") {
      Speech.speak(text, options);
    }
  };

  return (
    <TouchableOpacity style={styles.container}
      onPress={() => speak(text)}>
      <Icon
        size={35}
        name='campaign'
        type='material'
      />
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'silver',
    borderWidth: 1,
    padding: 10,
    borderRadius: 35
  }
})

export default SpeakerIconComponent;
