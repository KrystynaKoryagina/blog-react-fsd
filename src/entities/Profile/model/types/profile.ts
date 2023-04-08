import { Country, Currency } from 'shared/const/common';

export interface Profile {
  firstName: string;
  lastName: string;
  age: number,
  currency: Currency,
  country: Country,
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileStore {
  profile: Profile | null;
  isLoading: boolean;
  error?: string
  readonly: boolean
}
