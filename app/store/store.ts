import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import modalSlice from './modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    data: dataSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
