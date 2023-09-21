import { StoreSchema } from '@/app/providers/store';
import { getProfileEditData } from './getProfileEditData';
import { PROFILE_MOCK } from '@/entities/Profile';

describe('getProfileEditData', () => {
  test('should return editData value', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        data: PROFILE_MOCK,
        editData: PROFILE_MOCK,
        isLoading: false,
      },
    };

    expect(getProfileEditData(state as StoreSchema)).toEqual(PROFILE_MOCK);
  });

  test('should work with empty state and return null', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getProfileEditData(state as StoreSchema)).toBe(null);
  });
});
