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

type ScalingType = number | 'auto';
type GapType = 'normal' | 'small' | 'large' | 'xlarge';
type EdgesType = ('top' | 'bottom')[];

interface ContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  direction?: FlexDirectionType;
  alignment?: FlexAlignType;
  scaling?: ScalingType;
  justifying?: JustifyContentType;
  divider?: boolean;
  padding?: boolean;
  gap?: GapType;
  edges?: EdgesType;
  style?: StyleProp<ViewStyle>;
}

export default ContainerProps;
