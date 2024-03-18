import { Profile, PROFILE_MOCK } from '@/entities/Profile';
import { ProfileStore, ValidateProfileError } from '../types/editProfile';
import { profileActions, profileReducer } from './profileSlice';
import { fetchProfileData } from '../service/fetchProfleData/fetchProfileData';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

describe('profileSlice', () => {
  test('should set readonly', () => {
    const state: DeepPartial<ProfileStore> = { readOnly: false };

    expect(
      profileReducer(state as ProfileStore, profileActions.setReadOnly(true)),
    ).toEqual({ readOnly: true });
  });

  test('should update profile', () => {
    const state: DeepPartial<ProfileStore> = { editData: PROFILE_MOCK };

    const newProfile: Profile = {
      ...PROFILE_MOCK,
      firstName: 'New Name',
      lastName: 'New Lastname',
      age: 30,
    };

    expect(
      profileReducer(
        state as ProfileStore,
        profileActions.updateProfile(newProfile),
      ),
    ).toEqual({ editData: newProfile });
  });

  test('should set readonly to true, reset errors and reset editData value', () => {
    const state: DeepPartial<ProfileStore> = {
      data: PROFILE_MOCK,
      editData: {
        ...PROFILE_MOCK,
        firstName: 'New Name',
        lastName: 'New Lastname',
        age: 30,
      },
      readOnly: true,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };

    expect(
      profileReducer(state as ProfileStore, profileActions.cancelEdit()),
    ).toEqual({
      data: PROFILE_MOCK,
      editData: PROFILE_MOCK,
      readOnly: true,
      validateErrors: null,
    });
  });

  test('should set isLoading to true and error to null if fetchProfileData is pending', () => {
    const state: DeepPartial<ProfileStore> = {
      data: null,
      readOnly: true,
      isLoading: false,
    };

    expect(
      profileReducer(state as ProfileStore, fetchProfileData.pending),
    ).toEqual({
      data: null,
      readOnly: true,
      error: null,
      isLoading: true,
    });
  });

  test('should set data and editData, isLoading to false if fetchProfileData is fulfilled', () => {
    const state: DeepPartial<ProfileStore> = {
      data: null,
      readOnly: true,
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileStore,
        fetchProfileData.fulfilled(PROFILE_MOCK, '', ''),
      ),
    ).toEqual({
      data: PROFILE_MOCK,
      editData: PROFILE_MOCK,
      readOnly: true,
      isLoading: false,
    });
  });

  test('should set isLoading to true and validateErrors to null if updateProfileData is pending', () => {
    const state: DeepPartial<ProfileStore> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileStore, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: null,
    });
  });

  test('should set data and editData, isLoading to false if updateProfileData is fulfilled', () => {
    const state: DeepPartial<ProfileStore> = {
      data: PROFILE_MOCK,
      readOnly: true,
      isLoading: false,
    };

    expect(
      profileReducer(
        state as ProfileStore,
        updateProfileData.fulfilled(PROFILE_MOCK, ''),
      ),
    ).toEqual({
      data: PROFILE_MOCK,
      editData: PROFILE_MOCK,
      readOnly: true,
      isLoading: false,
    });
  });
});
