import { AUTH_TOKEN } from '@/shared/constants/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
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
      //       const response = await axios.post<
      // AxiosResponse<User>, LoginByUsernameRequest
      // >('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      // TODO should recieve without password
      localStorage.setItem(AUTH_TOKEN, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      // TODO add translation
      return rejectWithValue(i18n.t('Something went wrong.'));
    }
  },
);
