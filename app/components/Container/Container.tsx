import * as React from 'react';
import {Animated, ScrollView, View} from 'react-native';
import useStyle from './styles';
import ContainerProps from './types';
import {useDispatch} from 'react-redux';
import {updateModal} from '../../store/modalSlice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
}: ContainerProps) => {
  const safeAreaInsets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = React.useState(false);
  const opacity = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: scrolled ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [scrolled, opacity]);

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
    setScrolled(offsetY > 0);
    if (offsetY > 120) {
      dispatch(updateModal({key: 'scrolled', value: true}));
    } else {
      dispatch(updateModal({key: 'scrolled', value: false}));
    }
  };

  return divider ? (
    scrollable ? (
      <View style={{paddingBottom: safeAreaInsets.bottom}}>
        <Animated.View style={{...styles.borderStyle, opacity}} />
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
          {childrenWithSeparators}
        </ScrollView>
      </View>
    ) : (
      <View>{childrenWithSeparators}</View>
    )
  ) : scrollable ? (
    <View style={{paddingBottom: safeAreaInsets.bottom}}>
      <Animated.View style={{...styles.borderStyle, opacity}} />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.container}>{children}</View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>{children}</View>
  );
};

export default Container;
