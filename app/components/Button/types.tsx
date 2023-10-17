export type ButtonProps = {
  onPress?: () => void;
  text?: string;
  color: string;
  icon?: string;
  active?: boolean;
  borderOpacity?: number;
  backgroundOpacity?: number;
};

export default ButtonProps;
