import { testAsyncThunk } from '@/shared/config/test/TestAsyncThunk';
import { loginByUsername } from './loginByUserName';
import { User, UserRole, userActions } from '@/entities/User';

const MOCK_USER: User = {
  id: '1',
  username: 'User Name',
  role: UserRole.USER,
};

describe('loginByUsername', () => {
  test('should login user successfully', async () => {
    const thunk = testAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({
      data: MOCK_USER,
    }));

    const result = await thunk.callThunk({ username: 'User Name', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(MOCK_USER));
    expect(result.payload).toBe(MOCK_USER);
    expect(thunk.dispatch).toHaveBeenCalledTimes(3); // 1 - dispatch(loginbyUserName); 2 - dispatch Pending: dispatch(userActions.setAuthData(response.data)); 3 - dispatch fullfiled/rejected: return response.data;
  });

  test('should fail with error', async () => {
    const thunk = testAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk({ username: 'User Name', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR_MESSAGE');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // 1 - loginByUsername; 2 - return rejectWithValue(i18n.t('ERROR_MESSAGE'));
  });
});
