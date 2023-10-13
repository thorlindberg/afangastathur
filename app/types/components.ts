import {ReactNode} from 'react';
import {ViewStyle, StyleProp, TextInputProps} from 'react-native';

export interface LayoutPropsType {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface MenuItemPropsType {
  label: string;
  rightItem?: ReactNode;
  onPress: () => void;
}

export interface CardPropsType {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface InputPropsType extends TextInputProps {
  testID?: string;
  style?: ViewStyle;
  error?: string;
}
