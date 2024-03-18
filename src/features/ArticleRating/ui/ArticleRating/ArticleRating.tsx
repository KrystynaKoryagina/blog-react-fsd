import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/utils/classNames/classNames';
import styles from './ArticleRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import {
  useGetArticleRatingQuery,
  useRateArticleMutation,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRatingQuery({
    articleId,
    userId: authData?.id ?? '',
  });

  const [rateArticle] = useRateArticleMutation();

  const sendRating = useCallback(
    (count: number, feedback?: string) => {
      // TODO loading, error
      try {
        rateArticle({
          userId: authData?.id ?? '',
          rate: count,
          articleId,
          feedback,
        });
      } catch (e) {
        console.error(e);
      }
    },
    [articleId, authData?.id, rateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={108} />;
  }

  return (
    <div className={classNames(styles.ArticleRating, [className])}>
      <RatingCard
        title="Как Вам статья?"
        sendRating={sendRating}
        feedbackTitle="Оставьте свой отзыв о статье"
        rate={data?.[0]?.rate}
        hasFeedback
      />
    </div>
  );
};

export default memo(ArticleRating);
