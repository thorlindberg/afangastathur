import {StyleSheet} from 'react-native';

const sizes = {
  title: 32,
  large: 18,
  body: 14,
  footnote: 10,
};

const useStyle = ({color, size, bold, italic}: StyleProps) => {
  return StyleSheet.create({
    textStyle: {
      fontFamily: 'Inter',
      color: color,
      fontSize: sizes[size],
      fontWeight: bold ? 'bold' : 'normal',
      fontStyle: italic ? 'italic' : 'normal',
    },
  });
};

export default useStyle;
