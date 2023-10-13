import {FlexAlignType} from 'react-native';

export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface ContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  alignment?: FlexAlignType;
  scaling?: number;
  justifying?: JustifyContentType;
  divider?: boolean;
  padding?: boolean;
  gap?: 'normal' | 'small' | 'large' | 'xlarge';
  edges?: ('top' | 'bottom')[];
}

export default ContainerProps;
