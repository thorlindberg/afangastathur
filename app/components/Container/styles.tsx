import {FlexAlignType, StyleSheet} from 'react-native';
import {JustifyContentType, FlexDirectionType} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const sizes = {
  normal: 24,
  small: 12,
  large: 40,
  xlarge: 56,
};

const useStyle = (
  scrollable: boolean = false,
  direction: FlexDirectionType = 'column',
  alignment: FlexAlignType = 'flex-start',
  justifying: JustifyContentType = 'flex-start',
  scaling = 'auto',
  divider = false,
  padding = true,
  gap = 'normal',
  edges = [],
) => {
  const safeAreaInsets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flex: scaling,
      flexDirection: direction,
      alignItems: alignment,
      justifyContent: justifying,
      width: '100%',
      padding: padding ? 24 : 0,
      paddingBottom: divider
        ? 24
        : edges.includes('bottom')
        ? safeAreaInsets.bottom + 24
        : padding
        ? scrollable
          ? safeAreaInsets.bottom + 24
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
