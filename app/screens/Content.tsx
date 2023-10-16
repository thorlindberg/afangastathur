import * as React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Loading from '../screens/Loading';
import Maps from '../screens/Maps';
import useWelcomeHandler from '../handlers/welcomeHandler';
import {View, StyleSheet, Animated} from 'react-native';

const Content = () => {
  const dataState = useSelector((state: RootState) => state.data.state);
  const welcomeHandler = useWelcomeHandler();

  React.useEffect(() => {
    welcomeHandler();
  });

  const opacity = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: dataState === 'loaded' ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [opacity, dataState]);

  return (
    <View style={styles.containerStyle}>
      {dataState === 'loaded' && <Maps />}
      <Animated.View
        style={{...styles.absoluteStyle, opacity}}
        pointerEvents={dataState === 'loaded' ? 'none' : 'auto'}>
        <Loading />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
  },
  absoluteStyle: {width: '100%', height: '100%', position: 'absolute'},
});

export default Content;
