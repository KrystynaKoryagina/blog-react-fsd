import { createSlice } from '@reduxjs/toolkit';
import { ProfileStore } from '../types/profile';

const initialState: ProfileStore = {
  profile: null,
  readonly: true,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
