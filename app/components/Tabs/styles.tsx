import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/useTheme';

const useStyle = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    dividerStyle: {
      backgroundColor: 'rgb(225, 225, 225)',
      height: 1,
      width: '100%',
    },
    tabsStyle: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: 8,
      backgroundColor: theme.backgroundColor,
    },
  });
};

export default useStyle;
