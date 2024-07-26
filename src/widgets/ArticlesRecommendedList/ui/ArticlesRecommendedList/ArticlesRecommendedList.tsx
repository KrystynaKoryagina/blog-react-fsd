import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArticlesList,
  ArticlesList as ArticlesListDeprecated,
  useGetRecommendedArticlesQuery,
} from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import styles from './ArticlesRecommendedList.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIText } from '@/shared/ui/UIText';

interface ArticlesRecommendedListProps {
  className?: string;
}

// TODO update articlesList
export const ArticlesRecommendedList = memo(
  ({ className }: ArticlesRecommendedListProps) => {
    const { t } = useTranslation('article');

    const {
      data: articles,
      isLoading,
      isError,
    } = useGetRecommendedArticlesQuery(4);

    if (!articles || isError) {
      return null;
    }

    return (
      <VStack className={className} gap="16">
        <ToggleFeatureComponent
          featureName="isRedesignEnable"
          off={
            <>
              <Text>{t('RECOMMENDED_ARTICLES')}</Text>
              <ArticlesListDeprecated
                className={styles.ArticlesRecommendedList}
                articles={articles}
                isLoading={isLoading}
                target="_blank"
              />
            </>
          }
          on={
            <>
              <UIText>{t('RECOMMENDED_ARTICLES')}</UIText>
              <ArticlesList
                className={styles.ArticlesRecommendedList}
                articles={articles}
                isLoading={isLoading}
                target="_blank"
              />
            </>
          }
        />
      </VStack>
    );
  },
);
