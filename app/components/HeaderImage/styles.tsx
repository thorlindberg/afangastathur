import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    containerStyle: {
      width: '100%',
      height: 256,
      backgroundColor: 'rgb(235, 235, 235)',
    },
    imageStyle: {
      width: '100%',
      height: 256,
      position: 'absolute',
    },
  });
};

export default useStyle;
