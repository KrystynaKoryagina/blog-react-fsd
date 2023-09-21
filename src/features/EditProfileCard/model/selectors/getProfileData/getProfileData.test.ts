import { StoreSchema } from '@/app/providers/store';
import { getProfileData } from './getProfileData';
import { PROFILE_MOCK } from '@/entities/Profile';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        data: PROFILE_MOCK,
      },
    };

    expect(getProfileData(state as StoreSchema)).toEqual(PROFILE_MOCK);
  });

  test('should work with empty state and return undefined', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getProfileData(state as StoreSchema)).toBe(undefined);
  });
});
