import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StoreSchema } from '@/app/providers/store';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export const testAsyncThunk = <Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
  state?: DeepPartial<StoreSchema>,
) => {
  const dispatch = jest.fn();
  const getState = jest.fn(() => state as StoreSchema);
  const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios;

  const callThunk = async (arg: Arg) => {
    const action = actionCreator(arg);

    const result = await action(dispatch, getState, { api });

    return result;
  };

  return {
    dispatch,
    api,
    callThunk,
  };
};
