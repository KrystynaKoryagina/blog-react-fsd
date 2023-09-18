import { StoreSchema } from '@/app/providers/store';
import { getLoginUsername } from './getLoginUsername';

const MOCK_USER_NAME = 'User Name';

describe('getLoginUsername', () => {
  test('should return true', () => {
    const state: DeepPartial<StoreSchema> = {
      login: {
        username: MOCK_USER_NAME,
      },
    };

    expect(getLoginUsername(state as StoreSchema)).toEqual(MOCK_USER_NAME);
  });

  test('should work with empty state and return empty string', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getLoginUsername(state as StoreSchema)).toEqual('');
  });
});
