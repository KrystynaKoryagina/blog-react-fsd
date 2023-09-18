import { StoreSchema } from '@/app/providers/store';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
  test('should return true is loading in progress', () => {
    const state: DeepPartial<StoreSchema> = {
      login: {
        isLoading: true,
      },
    };

    expect(getLoginLoading(state as StoreSchema)).toEqual(true);
  });

  test('should return false if no loading', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getLoginLoading(state as StoreSchema)).toEqual(false);
  });
});
