import {adjustLightness} from '../../helpers/adjustLightness';
import {StyleSheet} from 'react-native';

const useStyle = (
  color: string,
  borderOpacity: number,
  backgroundOpacity: number,
  toggleOpacity: number,
) => {
  const borderColorWithOpacity = adjustLightness(color, borderOpacity);
  const backgroundColorWithOpacity = adjustLightness(color, backgroundOpacity);
  const toggleColorWithOpacity = adjustLightness(color, toggleOpacity);

  return StyleSheet.create({
    toggleStyle: {
      backgroundColor: toggleColorWithOpacity,
      borderRadius: 4,
      paddingHorizontal: 16,
      paddingVertical: 14,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    textStyle: {
      fontWeight: 'bold',
      color: color,
    },
    container: {
      borderRadius: 8,
      flex: 0,
      width: '100%',
      backgroundColor: backgroundColorWithOpacity,
      borderColor: borderColorWithOpacity,
      borderWidth: 1,
    },
  });
};

export default useStyle;
