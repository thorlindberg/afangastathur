import * as React from 'react';
import {Marker} from 'react-native-maps';
import useStyle from './styles';
import PinProps from './types';
import useDestinationHandler from '../../handlers/destinationHandler';
import Rounded from '../Rounded/Rounded';
import {ActivityIndicator, Image, View} from 'react-native';

const Pin = ({location}: PinProps) => {
  const styles = useStyle();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const destinationHandler = useDestinationHandler({location});
  return (
    <Marker
      key={location.url}
      onPress={destinationHandler}
      tracksViewChanges={!isLoaded}
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}>
      <Rounded radius={1000} smooth style={styles.pinStyle}>
        <View style={styles.pinStyle}>
          {!isLoaded && <ActivityIndicator size="small" color={'black'} />}
          <Image
            source={{uri: location.image}}
            style={{...styles.imageStyle, opacity: isLoaded ? 1 : 0}}
            resizeMode="cover"
            onLoad={() => setIsLoaded(true)}
          />
        </View>
      </Rounded>
    </Marker>
  );
};

export default Pin;
