import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export interface ProfileStore {
  profile: Profile | null;
  editData?: Profile | null;
  isLoading: boolean;
  readOnly: boolean;
  error?: string | null;
  validateErrors?: ValidateProfileError[] | null;
}
