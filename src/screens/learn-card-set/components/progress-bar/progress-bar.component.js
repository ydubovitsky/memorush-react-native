import * as React from 'react';
import { ProgressBar } from 'react-native-paper';

const ProgressBarComponent = ({ progress }) => (
  <ProgressBar progress={progress} color="green" />
);

export default ProgressBarComponent;