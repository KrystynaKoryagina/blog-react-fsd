import { memo, useMemo } from 'react';
import { ArticleCategory } from '../../model/types/article';
import { ChipContent, UIChip } from '@/shared/ui/UIChip';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/Stack';

interface ArticleCategoryListProps {
  category?: ArticleCategory[];
}

// TODO or move to ArticleAdditionalInfo
export const ArticleCategoryList = memo(
  ({ category = [] }: ArticleCategoryListProps) => {
    const { t } = useTranslation('article');

    // TODO create common mapper. Used in ArticleCategoryFilter
    // TODO maybe merge ArticleCategoryFilter feature and entities ?????
    const articleCategoties = useMemo<ChipContent<ArticleCategory>[]>(
      () =>
        category.map((value) => ({
          id: value,
          displayName: t(`ARTICLE_CATEGORY.${value}`),
          value,
        })),
      [t, category],
    );

    return (
      <HStack gap="4" wrap="wrap">
        {articleCategoties.map((item) => (
          <UIChip key={item.id} content={item} isSelected={true} />
        ))}
      </HStack>
    );
  },
);
