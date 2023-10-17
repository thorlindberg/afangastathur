import {StyleProp, ViewStyle} from 'react-native';

export interface ContextInterface {
  state: ModalState;
  setState: (value: ModalState) => void;
}

export interface ModalContextInterface {
  children: React.ReactNode;
}

export interface RoundedProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  radius: number;
  smooth?: boolean;
  borderWidth?: number;
  borderColor?: string;
}

export type DetentProps = 'small' | 'medium' | 'large';

export type ModalState = {
  isPresented: boolean;
  detent: DetentProps;
  node?: React.ReactNode;
};

export interface ModalProviderProps {
  children: React.ReactNode;
  backgroundColor?: string;
}
