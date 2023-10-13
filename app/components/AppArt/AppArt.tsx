import * as React from 'react';
import {Image} from 'react-native';
import useStyle from './styles';
import AppArtProps from './types';

const AppArt = ({source}: AppArtProps) => {
  const styles = useStyle();
  return (
    <Image source={source} style={styles.imageStyle} resizeMode="contain" />
  );
};

export default AppArt;
