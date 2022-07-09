import { configureStore } from '@reduxjs/toolkit';
import gameStore from './reducers';

export const store = configureStore({
  reducer: {
    simonSays: gameStore,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
