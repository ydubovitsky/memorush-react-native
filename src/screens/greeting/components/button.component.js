import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonComponent = ({ handler }) => (
  <Button icon="camera" mode="contained" onPress={handler}>
    Press me
  </Button>
);

export default ButtonComponent;