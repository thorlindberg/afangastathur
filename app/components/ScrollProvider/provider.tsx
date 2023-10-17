import React from 'react';
import {ScrollProviderProps} from './types';
import ScrollContext from './context';

const ScrollProvider = ({children, debug}: ScrollProviderProps) => {
  return <ScrollContext children={children} debug={debug} />;
};

export default ScrollProvider;
