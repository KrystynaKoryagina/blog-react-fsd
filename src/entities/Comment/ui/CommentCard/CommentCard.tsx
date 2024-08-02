import { memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { getRouteProfile } from '@/shared/constants/routes';
import { HStack, VStack } from '@/shared/ui/Stack';
import { CommentData } from '../../model/types/comment';
import styles from './CommentCard.module.scss';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { CommentCardSkeleton } from './CommentCardSkeleton';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UICard } from '@/shared/ui/UICard';
import { UILink } from '@/shared/ui/UILink';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { UIText } from '@/shared/ui/UIText';

interface CommentCardProps {
  comment: CommentData;
  isLoading: boolean;
  className?: string;
}

export const CommentCard = memo(
  ({ comment, className, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return <CommentCardSkeleton className={className} />;
    }

    return (
      <ToggleFeatureComponent
        featureName="isRedesignEnable"
        off={
          <VStack
            gap="8"
            className={classNames(styles.CommentCard, [className])}
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack gap="8" align="center">
                {comment.user?.avatar && (
                  <Avatar size={30} src={comment.user.avatar} />
                )}
                <Text>{comment.user.username}</Text>
              </HStack>
            </AppLink>
            <Text>{comment.text}</Text>
          </VStack>
        }
        on={
          <UICard gap="8" className={className}>
            <UILink to={getRouteProfile(comment.user.id)}>
              {comment.user?.avatar && (
                <UIAvatar
                  size={32}
                  src={comment.user.avatar}
                  userName={comment.user.username}
                />
              )}
            </UILink>
            <UIText>{comment.text}</UIText>
          </UICard>
        }
      />
    );
  },
);
