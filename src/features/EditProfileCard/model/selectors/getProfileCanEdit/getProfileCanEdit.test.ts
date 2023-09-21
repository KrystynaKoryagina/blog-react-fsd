import { PROFILE_MOCK } from '@/entities/Profile/model/const/profile.mock';
import { StoreSchema } from '@/app/providers/store';
import { getProfileCanEdit } from './getProfileCanEdit';
import { USER_MOCK } from '@/entities/User';

describe('getProfileCanEdit', () => {
  test('should return false if the profile is different from the user', () => {
    const state: DeepPartial<StoreSchema> = {
      user: {
        authData: USER_MOCK,
      },
      profile: {
        data: {
          ...PROFILE_MOCK,
          id: '2',
        },
      },
    };

    expect(getProfileCanEdit(state as StoreSchema)).toBe(false);
  });

  test('should return true if the profile is the same as the user', () => {
    const state: DeepPartial<StoreSchema> = {
      user: {
        authData: USER_MOCK,
      },
      profile: {
        data: PROFILE_MOCK,
      },
    };

    expect(getProfileCanEdit(state as StoreSchema)).toBe(true);
  });
});
