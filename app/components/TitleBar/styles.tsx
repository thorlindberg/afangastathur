import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useStyle = (
  backgroundColor,
  cancellationColor,
  confirmationColor,
  titleColor,
  detent,
  opacity,
) => {
  const safeAreaInsets = useSafeAreaInsets();
  return StyleSheet.create({
    dividerStyle: {
      marginHorizontal: 24,
      height: 1,
      backgroundColor: 'rgb(225, 225, 225)',
    },
    containerStyle: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingTop: detent === 'large' ? safeAreaInsets.top : 0,
    },
    titleBarStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cancellationStyle: {
      fontSize: 16,
      color: cancellationColor,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    middleStyle: {
      maxWidth: '50%',
      paddingHorizontal: 24,
      paddingVertical: 16,
      opacity: opacity,
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
    },
    titleStyle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: titleColor,
    },
    confirmationStyle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: confirmationColor,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
  });
};

export default useStyle;
