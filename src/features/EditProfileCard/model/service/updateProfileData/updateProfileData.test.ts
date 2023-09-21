import { testAsyncThunk } from '@/shared/config/test/testAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/editProfile';
import { PROFILE_MOCK } from '@/entities/Profile';

describe('updateProfileData', () => {
  test('should update profile data successfully', async () => {
    const thunk = testAsyncThunk(updateProfileData, {
      profile: {
        editData: PROFILE_MOCK,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({
      data: PROFILE_MOCK,
    }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(PROFILE_MOCK);
  });

  test('should fail with server error', async () => {
    const thunk = testAsyncThunk(updateProfileData, {
      profile: {
        editData: PROFILE_MOCK,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('should fail with validation error', async () => {
    const thunk = testAsyncThunk(updateProfileData, {
      profile: {
        editData: { ...PROFILE_MOCK, firstName: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
