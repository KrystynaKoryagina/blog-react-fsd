import { Profile } from 'entities/Profile';

export interface ProfileStore {
  profile: Profile | null;
  editData?: Profile | null;
  isLoading: boolean;
  readOnly: boolean;
  error?: string | null;
}
