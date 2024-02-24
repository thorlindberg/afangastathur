import {StyleSheet} from 'react-native';

const useStyle = (isLoaded: boolean) => {
  return StyleSheet.create({
    containerStyle: {
      width: '100%',
      height: 256,
      backgroundColor: 'rgb(235, 235, 235)',
    },
    imageStyle: {
      width: '100%',
      height: 256,
      flex: isLoaded ? 1 : 0,
    },
  });
};

export default useStyle;
