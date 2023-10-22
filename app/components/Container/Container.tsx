import * as React from 'react';
import {ScrollView, View} from 'react-native';
import useStyle from './styles';
import ContainerProps from './types';
import {useScroll} from 'react-native-scroll-provider';

const Container = ({
  children,
  scrollable = false,
  direction,
  alignment,
  justifying,
  scaling,
  divider = false,
  padding,
  gap,
  edges,
  style,
}: ContainerProps) => {
  const {setScroll} = useScroll();

  const styles = useStyle(
    scrollable,
    direction,
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
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={style}>
        {childrenWithSeparators}
      </ScrollView>
    ) : (
      <View style={[style, styles.container]}>{childrenWithSeparators}</View>
    )
  ) : scrollable ? (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={style}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  ) : (
    <View style={[style, styles.container]}>{children}</View>
  );
};

export default Container;
