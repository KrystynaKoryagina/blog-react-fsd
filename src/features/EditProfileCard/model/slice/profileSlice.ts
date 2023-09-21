import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ProfileStore, ValidateProfileError } from '../types/editProfile';
import { fetchProfileData } from '../service/fetchProfleData/fetchProfileData';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

export const initialState: ProfileStore = {
  data: null,
  readOnly: true,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Partial<Profile>>) => {
      state.editData = {
        ...state.editData,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readOnly = true;
      state.editData = state.data;
      state.validateErrors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.editData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.validateErrors = null;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload;
        state.editData = action.payload;
        state.isLoading = false;
        state.readOnly = true;
      })
      .addCase(
        updateProfileData.rejected,
        (state, action: PayloadAction<ValidateProfileError[] | undefined>) => {
          state.validateErrors = action.payload;
          state.isLoading = false;
        },
      );
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
