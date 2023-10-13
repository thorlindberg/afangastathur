import {FlexAlignType} from 'react-native';
import {StyleSheet} from 'react-native';
import {JustifyContentType} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const sizes = {
  normal: 24,
  small: 12,
  large: 40,
  xlarge: 56,
};

const useStyle = (
  scrollable: boolean = false,
  alignment: FlexAlignType = 'flex-start',
  justifying: JustifyContentType = 'flex-start',
  scaling = 1,
  divider = false,
  padding = true,
  gap = 'normal',
  edges = [],
) => {
  const safeAreaInsets = useSafeAreaInsets();
  return StyleSheet.create({
    borderStyle: {
      backgroundColor: 'rgb(225, 225, 225)',
      height: 1,
      width: '100%',
    },
    container: {
      flex: scaling,
      alignItems: alignment,
      justifyContent: justifying,
      width: '100%',
      height: '100%',
      padding: padding ? 24 : 0,
      paddingBottom: divider
        ? 24
        : edges.includes('bottom')
        ? safeAreaInsets.bottom + 24
        : padding
        ? scrollable
          ? safeAreaInsets.bottom + 48
          : 24
        : 0,
      paddingTop: edges.includes('top') ? safeAreaInsets.top : 8,
      gap: sizes[gap],
    },
    dividerStyle: {
      marginHorizontal: 24,
      height: 1,
      backgroundColor: 'rgb(225, 225, 225)',
    },
  });
};

export default useStyle;
