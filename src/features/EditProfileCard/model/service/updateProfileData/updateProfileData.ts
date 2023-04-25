import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Profile } from 'entities/Profile';
import i18n from 'shared/config/i18n/i18n';
import { getProfileEditData } from '../../selectors/getProfileEditData/getProfileEditData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const editData = getProfileEditData(getState());

    console.log('editData');

    try {
      const response = await extra.api.put<Profile>('/profile', editData);

      return response.data;
    } catch (err) {
      // TODO add translation
      return rejectWithValue(i18n.t('Something went wrong.'));
    }
  },
);
