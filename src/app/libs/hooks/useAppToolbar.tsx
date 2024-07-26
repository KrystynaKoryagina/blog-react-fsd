import { AppRoutes } from '@/shared/constants/routes';
import { useCurrentRoute } from '@/shared/lib/hooks/useCurrentRoute';
import { ScrollTopToolbar } from '@/widgets/ScrollTopToolbar';
import { ReactElement } from 'react';

export const useAppToolbar = () => {
  const currentPath = useCurrentRoute();

  const toolbarByRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollTopToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollTopToolbar />,
    [AppRoutes.PROFILE]: <div>Profile</div>,
  };

  return toolbarByRoute[currentPath];
};
