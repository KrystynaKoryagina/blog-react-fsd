import { memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { Text } from '@/shared/ui/Text';
import { getRouteProfile } from '@/shared/constants/routes';
import { HStack, VStack } from '@/shared/ui/Stack';
import { CommentData } from '../../model/types/comment';
import styles from './CommentCard.module.scss';
import { UILink } from '@/shared/ui/UILink';

interface CommentCardProps {
  comment: CommentData;
  isLoading: boolean;
  className?: string;
}

export const CommentCard = memo(
  ({ comment, className, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return (
        <div className={classNames(styles.CommentCard, [className])}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton height={16} width={100} className={styles.username} />
          </div>
          <Skeleton className={styles.text} width="100%" height={50} />
        </div>
      );
    }

    return (
      <VStack gap="8" className={classNames(styles.CommentCard, [className])}>
        <UILink to={getRouteProfile(comment.user.id)}>
          <HStack gap="8" align="center">
            {comment.user?.avatar && (
              <UIAvatar size={30} src={comment.user.avatar} />
            )}
            <Text>{comment.user.username}</Text>
          </HStack>
        </UILink>
        <Text>{comment.text}</Text>
      </VStack>
    );
  },
);
