import { StoreSchema } from '@/app/providers/store';
import { getProfileReadOnly } from './getProfileReadonly';

describe('getProfileReadOnly', () => {
  test('should return true', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { readOnly: true },
    };

    expect(getProfileReadOnly(state as StoreSchema)).toBe(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { readOnly: false },
    };

    expect(getProfileReadOnly(state as StoreSchema)).toBe(false);
  });

  test('should work with empty state and return initial value', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getProfileReadOnly(state as StoreSchema)).toBe(true);
  });
});
