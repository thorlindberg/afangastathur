import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
