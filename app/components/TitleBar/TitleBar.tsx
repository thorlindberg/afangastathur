import * as React from 'react';
import {Text, Animated, TouchableOpacity, View, Image} from 'react-native';
import useStyle from './styles';
import TitleBarProps from './types';
import Rounded from '../Rounded/Rounded';

const TitleBar = ({
  children,
  backgroundColor,
  cancellationColor,
  cancellationText,
  cancellationAction,
  confirmationColor,
  confirmationText,
  confirmationAction,
  titleColor,
  titleText,
  icon,
  detent,
  scrolled,
}: TitleBarProps) => {
  const opacity = React.useRef(new Animated.Value(scrolled ? 1 : 0)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: scrolled ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [opacity, scrolled]);

  const styles = useStyle(
    backgroundColor,
    cancellationColor,
    confirmationColor,
    titleColor,
    detent,
    opacity,
  );

  return (
    <View style={styles.containerStyle}>
      <View style={styles.titleBarStyle}>
        {cancellationText && (
          <TouchableOpacity onPress={cancellationAction}>
            <Text style={styles.cancellationStyle}>{cancellationText}</Text>
          </TouchableOpacity>
        )}
        <Animated.View style={styles.middleStyle}>
          {icon && (
            <Rounded
              radius={4}
              smooth
              style={{
                width: 24,
                height: 24,
              }}>
              <Image
                source={icon}
                style={{
                  width: 24,
                  height: 24,
                }}
                resizeMode="cover"
              />
            </Rounded>
          )}
          <Text
            style={styles.titleStyle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {titleText}
          </Text>
        </Animated.View>
        {confirmationText && (
          <TouchableOpacity onPress={confirmationAction}>
            <Text style={styles.confirmationStyle}>{confirmationText}</Text>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

export default TitleBar;