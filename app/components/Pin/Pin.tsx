import * as React from 'react';
import {Marker} from 'react-native-maps';
import useStyle from './styles';
import PinProps from './types';
import useDestinationHandler from '../../handlers/destinationHandler';
import Rounded from '../Rounded/Rounded';
import {Animated, View} from 'react-native';

const Pin = ({location}: PinProps) => {
  const styles = useStyle();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const destinationHandler = useDestinationHandler({location});

  const opacity = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: isLoaded ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [isLoaded, opacity]);

  return (
    <Marker
      style={{opacity: 1}}
      key={location.url}
      onPress={destinationHandler}
      tracksViewChanges={true}
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}>
      <Rounded radius={1000} smooth style={styles.pinStyle}>
        <View style={styles.pinStyle} />
      </Rounded>
      <Rounded radius={1000} smooth style={[styles.imageStyle, {margin: 4}]}>
        <Animated.Image
          source={{uri: location.image}}
          style={[styles.imageStyle, {opacity: opacity}]}
          resizeMode="cover"
          onLoad={() => setIsLoaded(true)}
        />
      </Rounded>
    </Marker>
  );
};

export default Pin;
