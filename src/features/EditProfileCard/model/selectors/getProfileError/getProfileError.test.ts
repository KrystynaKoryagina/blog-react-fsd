import { StoreSchema } from '@/app/providers/store';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return editData value', () => {
    const error = 'Something went wrong';

    const state: DeepPartial<StoreSchema> = {
      profile: { error },
    };

    expect(getProfileError(state as StoreSchema)).toBe(error);
  });

  test('should work with empty state and return undefined', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getProfileError(state as StoreSchema)).toBe(undefined);
  });
});
