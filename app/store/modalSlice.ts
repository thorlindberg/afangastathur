import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ModalState = {
  isPresented: boolean;
  detent: 'small' | 'medium' | 'large';
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

const initialState: ModalState = {
  isPresented: false,
  detent: 'medium',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<Partial<ModalState>>) {
      return {
        ...state,
        ...action.payload,
        isPresented: true,
      };
    },
    closeModal() {
      return {
        ...initialState,
        isPresented: false,
      };
    },
    updateModal(
      state,
      action: PayloadAction<{key: keyof ModalState; value: any}>,
    ) {
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const {openModal, closeModal, updateModal} = modalSlice.actions;

export default modalSlice.reducer;
