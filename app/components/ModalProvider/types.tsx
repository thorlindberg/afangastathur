export interface ContextProps {
  children?: React.ReactNode;
  openModal: (content: ModalState) => void;
  readModal: () => ModalState;
  closeModal: () => void;
  updateModal: <K extends keyof ModalState>(update: {
    key: K;
    value: ModalState[K];
  }) => void;
}

export type DetentProps = 'small' | 'medium' | 'large' | undefined;

export type ModalState = {
  isPresented?: boolean;
  detent?: DetentProps;
  node?: React.ReactNode;
  backgroundColor?: string;
  accentColor?: string;
  cancellationText?: string;
  confirmationText?: string;
  confirmationAction?: () => void;
  divider?: boolean;
  dividerColor?: string;
  title?: string;
  icon?: string;
  scrolled?: boolean;
};

export interface ModalProviderProps {
  children: React.ReactNode;
  backgroundColor?: string;
}
