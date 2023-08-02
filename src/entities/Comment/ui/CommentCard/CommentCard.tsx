import { memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routes/routes';
import { CommentData } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  comment: CommentData
  isLoading: boolean
  className?: string
}

export const CommentCard = memo(({ comment, className, isLoading }: CommentCardProps) => {
  // TODO isLoading всегда фолс
  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} borderRadius='50%' />
          <Skeleton height={16} width={100} className={styles.username} />
        </div>
        <Skeleton className={styles.text} width='100%' height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.CommentCard, [className])}>
      <AppLink to={`${RoutePath.PROFILE}/${comment.user.id}`} className={styles.header}>
        {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={styles.username}>{comment.user.username}</Text>
      </AppLink>
      <Text className={styles.text}>{comment.text}</Text>
    </div>
  );
});
