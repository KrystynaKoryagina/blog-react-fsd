import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editProfile';
import { PROFILE_MOCK } from '@/entities/Profile';

describe('validateProfileData', () => {
  test('should return empty array', () => {
    const result = validateProfileData(PROFILE_MOCK);

    expect(result).toEqual([]);
  });

  test('should return ValidateProfileError.NO_DATA error if no profile', () => {
    const result = validateProfileData(null);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('should return ValidateProfileError.INCORRECT_USER_DATA error if no username and lastname', () => {
    const result = validateProfileData({
      ...PROFILE_MOCK,
      username: '',
      lastName: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should return ValidateProfileError.INCORRECT_AGE error if no age value', () => {
    const result = validateProfileData({ ...PROFILE_MOCK, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('should return ValidateProfileError.INCORRECT_COUNTRY error if no country value', () => {
    const result = validateProfileData({ ...PROFILE_MOCK, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('should return errors for all incorrect data', () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
