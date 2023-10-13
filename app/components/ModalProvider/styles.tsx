import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useStyle = detent => {
  const safeAreaInsets = useSafeAreaInsets();
  return StyleSheet.create({
    containerStyle: {flex: 1, backgroundColor: 'black'},
    bufferStyle: {flex: detent === 'small' ? 1 : 0},
    safeAreaDefault: {
      flex: 1,
    },
    safeAreaPresented: {
      flex: 1,
      backgroundColor: 'black',
    },
    safeAreaModal: {
      flex: 1,
      marginTop: detent === 'medium' ? safeAreaInsets.top + 12 : 0,
    },
  });
};

export default useStyle;
