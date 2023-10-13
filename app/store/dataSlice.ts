import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type DataState = {
  state: 'loading' | 'loaded' | 'error';
  content?: any;
};

const initialState: DataState = {
  state: 'loading',
};

const dataSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    updateData(
      state,
      action: PayloadAction<{
        state: 'loading' | 'loaded' | 'error';
        content?: any;
      }>,
    ) {
      state.state = action.payload.state;
      state.content = action.payload.content;
    },
  },
});

export const {updateData} = dataSlice.actions;

export default dataSlice.reducer;
