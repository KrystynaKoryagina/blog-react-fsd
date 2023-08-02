import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export interface ProfileStore {
  data: Profile | null;
  isLoading: boolean;
  readOnly: boolean;
  error?: string | null
  editData?: Profile | null;
  validateErrors?: ValidateProfileError[] | null;
}
