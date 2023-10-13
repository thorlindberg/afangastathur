import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    boldText: {
      fontWeight: 'bold',
    },
    listStyle: {
      flex: 0,
      paddingHorizontal: 42,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
    },
    itemStyle: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 5,
      width: '100%',
      paddingLeft: 24,
    },
  });
};

export default useStyle;
