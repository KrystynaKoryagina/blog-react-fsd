import { Article } from '@/entities/Article';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { memo } from 'react';

interface ArticleAdditionalInfoContainerProps {
  article?: Article;
}

export const ArticleAdditionalInfoContainer = memo(
  ({ article }: ArticleAdditionalInfoContainerProps) => {
    return (
      // <ArticleAdditionalInfo
      //   userAvatar={article?.user.avatar}
      //   userName={article?.user.username}
      //   views={article?.views}
      //   articleCategories={article?.category.join(' ')}
      // />
      <div>djfsldjflsd</div>
    );
  },
);
