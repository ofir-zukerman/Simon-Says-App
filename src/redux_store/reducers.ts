import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameScore, IPlayerList } from '../interfaces/interface';
import { bubbleSortMinToMax } from '../utils/sort.utils';
import { asyncStorageUtil } from '../utils/storage.utils';

const initialState: IGameScore = {
  player: [],
};

const gameStore = createSlice({
  name: 'simonSays',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<IPlayerList[]>) => {
      asyncStorageUtil.saveArrayOfObjects('LIST', [
        ...state.player,
        ...action.payload,
      ]);
      const temp = bubbleSortMinToMax(
        [...state.player, ...action.payload],
        'score',
      ).reverse();
      state.player = temp.slice(0, 10);
    },
  },
});

export const { setPlayer } = gameStore.actions;
export default gameStore.reducer;
