import * as React from 'react';
import {Image, View} from 'react-native';
import useStyle from './styles';
import HeaderImageProps from './types';
import Progress from '../Progress/Progress';
import Rounded from '../Rounded/Rounded';

const HeaderImage = ({source}: HeaderImageProps) => {
  const styles = useStyle();
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <Rounded radius={8} smooth style={styles.containerStyle}>
      {!isLoaded && (
        <View style={styles.containerStyle}>
          <Progress color={'black'} />
        </View>
      )}
      <Image
        source={source}
        style={styles.imageStyle}
        resizeMode="cover"
        onLoad={() => setIsLoaded(true)}
      />
    </Rounded>
  );
};

export default HeaderImage;
