import { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleListView.module.scss';

export const ArticleListViewSkeleton = memo(() => (
  <Card>
    <VStack gap='16'>
      <HStack justify='between' align='center'>
        <HStack gap='4' align='center'>
          <Skeleton borderRadius='50%' height={30} width={30} />
          <Skeleton width={150} height={20} />
        </HStack>
        <Skeleton width={150} height={20} />
      </HStack>

      <VStack gap='16'>
        <VStack gap='4'>
          <Skeleton width={250} height={24} />
          <Skeleton width={150} height={20} />
        </VStack>
        <Skeleton height={300} className={styles.img} />
      </VStack>

      <Skeleton height={36} width={200} />
    </VStack>
  </Card>
));
