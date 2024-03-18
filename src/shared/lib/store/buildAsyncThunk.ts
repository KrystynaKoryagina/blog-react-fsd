/*
  NOTE
  buildAsyncThunk - it's a wrapper that helps avoid using dispatch in the components.
*/

import {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  bindActionCreators,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkConfig } from '@/app/providers/store';

export const buildAsyncThunk = <Returned, ThunkArg, Rejected>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    ThunkConfig<Rejected>
  >,
  options?: AsyncThunkOptions<ThunkArg, ThunkConfig<Rejected>>,
) => {
  const asyncThunk = createAsyncThunk(typePrefix, payloadCreator, options);

  const useAsyncThunk = () => {
    const dispatch = useDispatch();

    // NOTE https://redux.js.org/api/bindactioncreators
    return useMemo(() => bindActionCreators(asyncThunk, dispatch), [dispatch]);
  };

  return { useAsyncThunk, asyncThunk };
};
