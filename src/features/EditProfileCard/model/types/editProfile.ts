import { Profile } from 'entities/Profile';

export interface ProfileStore {
  data: Profile | null;
  isLoading: boolean;
  readOnly: boolean;
  error?: string | null
  editData?: Profile | null;
  validateErrors?: ValidateProfileError[] | null;
}

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}