import * as React from 'react';
import {Text, View} from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import {Icon} from '@rneui/themed';
import useStyle from './styles';
import SlideProps from './types';

const Slide = ({
  onPress,
  text,
  color,
  icon,
  borderOpacity = 0.8,
  backgroundOpacity = 0.7,
  toggleOpacity = 1,
}: SlideProps) => {
  const styles = useStyle(
    color,
    borderOpacity,
    backgroundOpacity,
    toggleOpacity,
  );

  return (
    <Slider
      onEndReached={() => onPress}
      containerStyle={styles.container}
      sliderElement={
        <View style={styles.toggleStyle}>
          <Icon name={icon} size={20} color={color} />
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      }
    />
  );
};

export default Slide;
