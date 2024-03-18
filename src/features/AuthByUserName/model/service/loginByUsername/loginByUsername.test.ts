import { testAsyncThunk } from '@/shared/config/test/testAsyncThunk';
import { loginByUsername } from './loginByUserName';
import { USER_MOCK, userActions } from '@/entities/User';

describe('loginByUsername', () => {
  test('should login user successfully', async () => {
    const thunk = testAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: USER_MOCK,
      }),
    );

    const result = await thunk.callThunk({
      username: 'User Name',
      password: '123',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(USER_MOCK),
    );
    expect(result.payload).toBe(USER_MOCK);
    expect(thunk.dispatch).toHaveBeenCalledTimes(3); // NOTE 1 - dispatch(loginbyUserName); 2 - dispatch Pending: dispatch(userActions.setAuthData(response.data)); 3 - dispatch fullfiled/rejected: return response.data;
  });

  test('should fail with error', async () => {
    const thunk = testAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );

    const result = await thunk.callThunk({
      username: 'User Name',
      password: '123',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR_MESSAGE');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // NOTE 1 - loginByUsername; 2 - return rejectWithValue(i18n.t('ERROR_MESSAGE'));
  });
});
