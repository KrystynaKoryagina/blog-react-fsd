import { memo } from 'react';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { useGetUserAuthData } from '../../model/selectors/getUserAuthData/getUserAuthData';

// TODO
export const UserInfo = memo(() => {
  const user = useGetUserAuthData();

  return (
    <HStack>
      <Avatar />
    </HStack>
  );
});
