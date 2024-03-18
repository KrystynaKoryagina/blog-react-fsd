import { lazy } from 'react';

export const NotificationsActionLazy = lazy(
  () => import('./NotificationsAction'),
);
