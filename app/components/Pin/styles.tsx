import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/useTheme';

const useStyle = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    pinStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      backgroundColor: theme.backgroundColor,
    },
    imageStyle: {
      width: 48,
      height: 48,
      position: 'absolute',
      backgroundColor: theme.backgroundColor,
    },
  });
};

export default useStyle;
