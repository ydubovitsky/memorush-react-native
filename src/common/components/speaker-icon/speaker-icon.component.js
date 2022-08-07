import * as Speech from 'expo-speech';
import * as React from 'react';
import { Icon } from 'react-native-elements';

const SpeakerIconComponent = ({ text }) => {
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <Icon
      name='campaign'
      type='material'
      onPress={() => speak()}
    />
  );
}

export default SpeakerIconComponent;
