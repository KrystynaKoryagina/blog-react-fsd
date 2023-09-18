import { StoreSchema } from '@/app/providers/store';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error message', () => {
    const state: DeepPartial<StoreSchema> = {
      login: {
        error: 'Error',
      },
    };

    expect(getLoginError(state as StoreSchema)).toEqual('Error');
  });

  test('should work with empty state and return undefined', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getLoginError(state as StoreSchema)).toBeUndefined();
  });
});
