import { StoreSchema } from '@/app/providers/store';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading', () => {
  test('should return true if loading is in progress', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { isLoading: true },
    };

    expect(getProfileLoading(state as StoreSchema)).toBe(true);
  });

  test('should return false if loading is not in progress', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { isLoading: false },
    };

    expect(getProfileLoading(state as StoreSchema)).toBe(false);
  });

  test('should work with empty state and return undefined', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getProfileLoading(state as StoreSchema)).toBe(undefined);
  });
});
