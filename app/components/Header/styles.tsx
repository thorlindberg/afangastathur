import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useStyle = () => {
  const safeAreaInsets = useSafeAreaInsets();
  return StyleSheet.create({
    emergencyStyle: {
      paddingHorizontal: 16,
      paddingVertical: 6,
      backgroundColor: '#DC1E35',
      borderRadius: 100,
    },
    headerStyle: {
      width: '100%',
      position: 'absolute',
      paddingHorizontal: 24,
      paddingBottom: 100,
      paddingTop: safeAreaInsets.top + 16,
    },
    menuStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    moreButtonsStyle: {
      flexDirection: 'row',
      gap: 24,
    },
  });
};

export default useStyle;
