import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/useTheme';

const useStyle = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    pinStyle: {
      width: 48,
      height: 48,
      backgroundColor: theme.backgroundColor,
    },
    imageStyle: {
      width: 40,
      height: 40,
      position: 'absolute',
      backgroundColor: theme.backgroundColor,
    },
  });
};

export default useStyle;
