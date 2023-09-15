import { createSelector } from '@reduxjs/toolkit';
import { isUserAdmin, isUserOwner } from '@/entities/User';

export const getIsAdminPanelAvailable = createSelector(
  isUserAdmin,
  isUserOwner,
  (isAdmin, isOwner) => isAdmin || isOwner,
);
