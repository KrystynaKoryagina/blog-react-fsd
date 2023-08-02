import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollStore } from '../types/scrollStore';
import { PageScroll } from '../types/scroll';

export const initialState: ScrollStore = {
  scroll: {},
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<PageScroll>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
