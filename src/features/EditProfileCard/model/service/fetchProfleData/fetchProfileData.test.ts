import { testAsyncThunk } from '@/shared/config/test/testAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { PROFILE_MOCK } from '@/entities/Profile';

describe('fetchProfileData', () => {
  test('should fetch profile data successfully', async () => {
    const thunk = testAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: PROFILE_MOCK,
    }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(PROFILE_MOCK);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // NOTE 1 - dispatch(fetchProfileData); 2 - dispatch fullfiled/rejected: return response.data;
  });

  test('should fail with error', async () => {
    const thunk = testAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR_MESSAGE');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // NOTE 1 - dispatch(fetchProfileData); 2 - return rejectWithValue(i18n.t('ERROR_MESSAGE'));
  });
});
