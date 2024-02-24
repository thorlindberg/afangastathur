import * as React from 'react';
import {Image} from 'react-native';
import useStyle from './styles';
import HeaderImageProps from './types';
import Progress from '../Progress/Progress';
import Rounded from '../Rounded/Rounded';

const HeaderImage = ({source}: HeaderImageProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const styles = useStyle(isLoaded);

  return (
    <Rounded radius={8} smooth style={styles.containerStyle}>
      {!isLoaded && <Progress color={'black'} style={styles.containerStyle} />}
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
