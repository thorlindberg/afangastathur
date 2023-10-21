import {FlexAlignType} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';

export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type FlexDirectionType =
  | 'column'
  | 'row'
  | 'row-reverse'
  | 'column-reverse';

interface ContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  direction?: FlexDirectionType;
  alignment?: FlexAlignType;
  scaling?: number;
  justifying?: JustifyContentType;
  divider?: boolean;
  padding?: boolean;
  gap?: 'normal' | 'small' | 'large' | 'xlarge';
  edges?: ('top' | 'bottom')[];
  style?: StyleProp<ViewStyle>;
}

export default ContainerProps;
