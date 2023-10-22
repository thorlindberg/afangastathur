import * as React from 'react';
import {Marker} from 'react-native-maps';
import useStyle from './styles';
import PinProps from './types';
import useDestinationHandler from '../../handlers/destinationHandler';
import Rounded from '../Rounded/Rounded';
import {Image, View} from 'react-native';

const Pin = ({location}: PinProps) => {
  const styles = useStyle();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const destinationHandler = useDestinationHandler({location});

  React.useEffect(() => {
    Image.prefetch(location.image)
      .then(() => {
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('[ERROR] Image prefetch failed', error);
      });
  }, [location.image]);

  return isLoaded ? (
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
        <Image
          source={{uri: location.image}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </Rounded>
    </Marker>
  ) : (
    <></>
  );
};

export default Pin;
