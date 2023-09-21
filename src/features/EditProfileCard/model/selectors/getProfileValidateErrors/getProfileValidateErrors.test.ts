import { StoreSchema } from '@/app/providers/store';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editProfile';

describe('getProfileValidateErrors', () => {
  test('should return list of errors', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.NO_DATA,
          ValidateProfileError.SERVER_ERROR,
        ],
      },
    };

    expect(getProfileValidateErrors(state as StoreSchema)).toEqual([
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('should work with empty state and return undefined', () => {
    const state: DeepPartial<StoreSchema> = {};

    expect(getProfileValidateErrors(state as StoreSchema)).toBe(undefined);
  });
});
