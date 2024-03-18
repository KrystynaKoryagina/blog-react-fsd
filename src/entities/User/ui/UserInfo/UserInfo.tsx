import { memo } from 'react';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { HStack } from '@/shared/ui/Stack';
import { useGetUserAuthData } from '../../model/selectors/getUserAuthData/getUserAuthData';

// TODO
export const UserInfo = memo(() => {
  const user = useGetUserAuthData();

  return (
    <HStack>
      <UIAvatar />
    </HStack>
  );
});
