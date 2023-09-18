import { StoreSchema } from '@/app/providers/store';
import { getLoginPassword } from './getLoginPassword';

const MOCK_PASS = '123456';

describe('getLoginPassword', () => {
  test('should return true', () => {
    const state: DeepPartial<StoreSchema> = {
      login: {
        password: MOCK_PASS,
      },
    };

    expect(getLoginPassword(state as StoreSchema)).toEqual(MOCK_PASS);
  });

  test('should work with empty state and return empty string', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getLoginPassword(state as StoreSchema)).toEqual('');
  });
});
