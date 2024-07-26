import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails, useGetArticleByIdQuery } from '@/entities/Article';
import { ArticleComments } from '@/widgets/ArticleComments';
import { ArticlesRecommendedList } from '@/widgets/ArticlesRecommendedList';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { ArticleDetailsPageHeader } from '../deprecated/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import ArticleDetailsPageDeprecated from '../deprecated/ArticleDetailsPage/ArticleDetailsPage';
import { ArticleAdditionalInfoContainer } from '../ArticleAdditionalInfoContainer/ArticleAdditionalInfoContainer';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import styles from './ArticleDetailsPage.module.scss';

// const reducers: ReducersList = {
//   article: articleReducer,
// };

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  // TODO
  if (!id) {
    return null;
  }

  const { data: article } = useGetArticleByIdQuery(id);

  // TODO do we need it ????
  // useDynamicReducerLoader({ reducers });

  // const isLoading = useSelector(getArticleLoading);
  // const article = useSelector(getArticleData);
  // const error = useSelector(getArticleError);

  // const fetchArticleById = useFetchArticleById();

  // TODO
  // () => {
  //   if (__PROJECT__ !== 'storybook') {
  //     dispatch(fetchArticleById(id));
  //   }
  // }, [dispatch, id]);

  // useInitialEffect(() => {
  //   fetchArticleById(id);
  // }, [fetchArticleById]);

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      on={
        <StickyContentLayout
          right={
            <ArticleAdditionalInfo
              className={styles.articleInfo}
              article={article}
            />
          }
          content={
            <Page>
              <VStack gap="24">
                <ArticleDetails articleId={id} />
                <ArticleRating articleId={id} />
                <ArticlesRecommendedList />
                <ArticleComments articleId={id} />
              </VStack>
            </Page>
          }
        />
      }
      off={<ArticleDetailsPageDeprecated />}
    />
  );
};

export default memo(ArticleDetailsPage);
