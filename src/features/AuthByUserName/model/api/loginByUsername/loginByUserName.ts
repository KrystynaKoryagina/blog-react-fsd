import { AUTH_TOKEN } from 'shared/const/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { LoginByUsernameRequest } from '../../types/login';

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameRequest,
{ rejectValue: string }
>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      //       const response = await axios.post<
      // AxiosResponse<User>, LoginByUsernameRequest
      // >('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      // TODO should recieve without password
      localStorage.setItem(AUTH_TOKEN, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      // TODO add translation
      return thunkAPI.rejectWithValue(i18n.t('Something went wrong.'));
    }
  },
);
