import { createSelector } from 'reselect';
import { StoreSchema } from '@/app/providers/store';
import { getProfileData } from '../getProfileData/getProfileData';

const authData = (state: StoreSchema) => state?.user.authData;

export const getProfileCanEdit = createSelector(
  authData,
  getProfileData,
  (user, profile) => user?.id === profile?.id,
);
