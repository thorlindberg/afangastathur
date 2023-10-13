import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import useStyle from './styles';
import MapProps from './types';

// https://mapstyle.withgoogle.com
const customMapStyle = require('./customMapStyle.json');

const Map = ({
  children,
  latitude,
  longitude,
  latitudeDelta,
  longitudeDelta,
}: MapProps) => {
  const styles = useStyle();
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsMyLocationButton={false}
      showsCompass={false}
      showsUserLocation={true}
      customMapStyle={customMapStyle}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      }}
      style={styles.mapStyle}>
      {children}
    </MapView>
  );
};

export default Map;
