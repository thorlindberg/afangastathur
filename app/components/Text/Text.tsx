import * as React from 'react';
import {Text as ReactText} from 'react-native';
import useStyle from './styles';
import TextProps from './types';

const Text = ({
  children,
  color,
  size = 'body',
  bold = false,
  italic = false,
}: TextProps) => {
  const styles = useStyle({color, size, bold, italic});
  return <ReactText style={styles.textStyle}>{children}</ReactText>;
};

export default Text;
