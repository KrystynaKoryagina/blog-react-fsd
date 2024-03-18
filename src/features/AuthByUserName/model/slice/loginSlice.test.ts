import { LoginStore } from '../types/login';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('should set username', () => {
    const state: DeepPartial<LoginStore> = { username: '' };

    expect(
      loginReducer(state as LoginStore, loginActions.setUsername('User Name')),
    ).toEqual({ username: 'User Name' });
  });

  test('should set password', () => {
    const state: DeepPartial<LoginStore> = { password: '' };

    expect(
      loginReducer(state as LoginStore, loginActions.setPassword('123456')),
    ).toEqual({ password: '123456' });
  });
});
