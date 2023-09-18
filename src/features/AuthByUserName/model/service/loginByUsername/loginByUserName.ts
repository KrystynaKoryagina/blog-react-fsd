import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from '@/shared/constants/localStorage';
import { ThunkConfig } from '@/app/providers/store';
import { User, userActions } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { LoginByUsernameRequest } from '../../types/login';

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameRequest,
ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      // TODO should recieve without password
      localStorage.setItem(AUTH_TOKEN, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      return rejectWithValue(i18n.t('ERROR_MESSAGE'));
    }
  },
);
