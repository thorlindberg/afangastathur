interface TitleBarProps {
  children: React.ReactNode;
  backgroundColor?: String;
  cancellationColor?: String;
  cancellationText?: String;
  cancellationAction?: () => void;
  confirmationColor?: String;
  confirmationText?: String;
  confirmationAction?: () => void;
  titleColor?: String;
  titleText?: String;
  icon?: String;
  detent?: 'small' | 'medium' | 'large';
  scrolled?: boolean;
}

export default TitleBarProps;
