import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import styles from './ArticleListView.module.scss';
import { UICard } from '@/shared/ui/UICard';
import { UISkeleton } from '@/shared/ui/UISkeleton';

export const ArticleListViewSkeleton = memo(() => (
  <UICard gap="8" className={styles.ArticleListView} max>
    <HStack gap="8" align="center">
      <HStack gap="4" align="center">
        <UISkeleton width={32} height={32} borderRadius="50%" />
        <UISkeleton height={20} width={50} />
      </HStack>
      <UISkeleton height={20} width={50} />
    </HStack>

    <UISkeleton height={20} />
    <UISkeleton height={20} />
    <UISkeleton height={20} width={70} />

    <UISkeleton height={300} />

    <UISkeleton height={72} />

    <HStack align="center" justify="between">
      <UISkeleton height={20} width={70} />

      <HStack gap="8" align="center">
        <UISkeleton width={32} height={32} />
        <UISkeleton height={20} width={40} />
      </HStack>
    </HStack>
  </UICard>
));
