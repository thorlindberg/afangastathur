import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    tabStyle: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
    },
  });
};

export default useStyle;
