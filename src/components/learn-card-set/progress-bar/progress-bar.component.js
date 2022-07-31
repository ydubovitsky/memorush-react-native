import * as React from 'react';
import { ProgressBar } from 'react-native-paper';

const ProgressBarComponent = ({ progress }) => (
  <ProgressBar progress={progress} color="blue" />
);

export default ProgressBarComponent;