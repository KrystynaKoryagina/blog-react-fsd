import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { UICard } from '@/shared/ui/UICard';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { UIText } from '@/shared/ui/UIText';
import { Article, ArticleCategoryList } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleEditButton } from '@/features/ArticleEdit';

interface ArticleAdditionalInfoProps {
  article?: Article;
  className?: string;
}

export const ArticleAdditionalInfo = memo(
  ({ className, article }: ArticleAdditionalInfoProps) => {
    const { t } = useTranslation('article');

    if (!article) {
      // TODO add empty state
      return null;
    }

    return (
      <UICard className={className}>
        <VStack gap="32">
          <HStack gap="16" align="center">
            <UIAvatar
              size={32}
              src={article?.user.avatar}
              userName={article?.user.username}
              textSize="sm"
              textWeight="bold"
            />
            <UIText size="sm">{article?.createdAt}</UIText>
          </HStack>

          <ArticleCategoryList category={article?.category} />

          <UIText size="sm">{t('views', { count: article?.views })}</UIText>

          <ArticleEditButton articleId={article?.id} />
        </VStack>
      </UICard>
    );
  },
);
