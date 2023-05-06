import { Country } from 'shared/constants/country';
import { Currency } from 'shared/constants/currency';

export interface Profile {
  firstName?: string;
  lastName?: string;
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string;
  username?: string;
  avatar?: string;
}

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}
