import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import ProgressProps from './types';
import Container from '../Container/Container';

const Progress = ({children, color, style}: ProgressProps) => {
  return (
    <Container
      alignment="center"
      justifying="center"
      gap={'small'}
      style={style}>
      <ActivityIndicator size="small" color={color} />
      {children}
    </Container>
  );
};

export default Progress;
