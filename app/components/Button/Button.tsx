import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import useStyle from './styles';
import ButtonProps from './types';
import Rounded from '../Rounded/Rounded';
import {adjustLightness} from '../../helpers/adjustLightness';
import Text from '../../components/Text/Text';

const Button = ({
  onPress,
  text,
  color,
  icon,
  active = true,
  borderOpacity = 0.85,
  backgroundOpacity = 0.95,
}: ButtonProps) => {
  const borderColorWithOpacity = adjustLightness(color, borderOpacity);
  const backgroundColorWithOpacity = adjustLightness(color, backgroundOpacity);
  const styles = useStyle(color, icon, backgroundColorWithOpacity);

  return (
    <Rounded
      radius={8}
      smooth
      style={styles.containerStyle}
      borderWidth={1}
      borderColor={borderColorWithOpacity}>
      <TouchableOpacity
        style={styles.buttonStyle}
        disabled={!active}
        onPress={onPress}
        activeOpacity={0.8}>
        {icon ? (
          <View style={styles.titleBar}>
            <Text bold color={color}>
              {text}
            </Text>
            <Icon name={icon} size={20} color={color} />
          </View>
        ) : (
          <View style={styles.titleBar}>
            <Text bold color={color}>
              {text}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Rounded>
  );
};

export default Button;
