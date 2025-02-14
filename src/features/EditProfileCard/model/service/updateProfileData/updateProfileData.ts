import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { Profile } from '@/entities/Profile';
import { getProfileEditData } from '../../selectors/getProfileEditData/getProfileEditData';
import { ValidateProfileError } from '../../types/editProfile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const editData: Partial<Profile> | null = getProfileEditData(getState());

  const errors: ValidateProfileError[] = validateProfileData(editData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${editData?.id}`,
      editData,
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
