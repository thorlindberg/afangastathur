import {StyleSheet} from 'react-native';

const useStyle = (
  color: string,
  icon: string | undefined,
  backgroundColor: string,
) => {
  return StyleSheet.create({
    containerStyle: {
      flex: 0,
      width: '100%',
    },
    buttonStyle: {
      flex: 0,
      width: '100%',
      backgroundColor: backgroundColor,
    },
    titleBar: {
      flex: 0,
      padding: 14,
      flexDirection: 'row',
      justifyContent: icon ? 'space-between' : 'center',
      alignItems: 'center',
    },
    textStyle: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: color,
    },
  });
};

export default useStyle;
