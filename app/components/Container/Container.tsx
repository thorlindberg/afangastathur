import * as React from 'react';
import {Animated, ScrollView, View} from 'react-native';
import useStyle from './styles';
import ContainerProps from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useScroll} from 'react-native-scroll-provider';

const Container = ({
  children,
  scrollable = false,
  alignment,
  justifying = 'flex-start',
  scaling,
  divider = false,
  padding = true,
  gap = 'normal',
  edges,
  style,
}: ContainerProps) => {
  const {getScroll, setScroll} = useScroll();
  const scrolled = getScroll('divider');
  const safeAreaInsets = useSafeAreaInsets();

  const opacity = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: scrolled ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [opacity, scrolled]);

  const styles = useStyle(
    scrollable,
    alignment,
    justifying,
    scaling,
    divider,
    padding,
    gap,
    edges,
  );

  const childrenArray = React.Children.toArray(children);
  const childrenWithSeparators = childrenArray.flatMap((child, index) => {
    if (index === childrenArray.length - 1) {
      return [
        <View key={`container ${index}`} style={styles.container}>
          {child}
        </View>,
      ];
    } else {
      return [
        <View key={`container ${index}`} style={styles.container}>
          {child}
        </View>,
        <View key={`divider ${index}`} style={styles.dividerStyle} />,
      ];
    }
  });

  const handleScroll = (event: {nativeEvent: {contentOffset: {y: number}}}) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScroll('divider', offsetY > 0);
    if (offsetY > 120) {
      setScroll('titlebar', true);
    } else {
      setScroll('titlebar', false);
    }
  };

  return divider ? (
    scrollable ? (
      <View style={[style, {paddingBottom: safeAreaInsets.bottom}]}>
        <Animated.View style={{...styles.borderStyle, opacity}} />
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
          {childrenWithSeparators}
        </ScrollView>
      </View>
    ) : (
      <View style={[style, styles.container]}>{childrenWithSeparators}</View>
    )
  ) : scrollable ? (
    <View style={[style, {paddingBottom: safeAreaInsets.bottom}]}>
      <Animated.View style={{...styles.borderStyle, opacity}} />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.container}>{children}</View>
      </ScrollView>
    </View>
  ) : (
    <View style={[style, styles.container]}>{children}</View>
  );
};

export default Container;
