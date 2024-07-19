import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArticlesList,
  articlesListReducer,
  useFetchNextArticles,
} from '@/widgets/ArticlesList';
import { ReducersList } from '@/app/providers/store';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { ArticlesPageFilter as ArticlesPageFilterDeprectaed } from '../deprecated/ArticlesPageFilter/ArticlesPageFilter';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useInitArticlesPage } from '@/widgets/ArticlesList/model/services/initArticlesPage/initArticlesPage';
import styles from './ArticlesPage.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ArticlesViewContainer } from '../ArticlesViewContainer/ArticlesViewContainer';
import { ArticlesFiltersContainer } from '../ArticlesFiltersContainer/ArticlesFiltersContainer';

const reducers: ReducersList = {
  articlesList: articlesListReducer,
};

const ArticlesPage = () => {
  useDynamicReducerLoader({ reducers, removeAfterUnmount: false });

  const initArticlesPage = useInitArticlesPage();
  const fetchNextArticles = useFetchNextArticles();

  const [searchParams] = useSearchParams();

  // TODO
  // useInitialEffect

  // TODO move to hook
  // useEffect(() => {
  //   if (__PROJECT__ !== 'storybook') {
  //     dispatch(fetchCommentsByArticleId(articleId));
  //   }
  // }, [dispatch, id]);

  useInitialEffect(() => {
    initArticlesPage(searchParams);
  }, [searchParams]);

  const onLoadMoreArticles = useCallback(() => {
    fetchNextArticles();
  }, [fetchNextArticles]);

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      on={
        <StickyContentLayout
          left={<ArticlesViewContainer />}
          right={<ArticlesFiltersContainer />}
          content={
            <Page onScrollEnd={onLoadMoreArticles} saveScroll>
              <ArticlesList />
            </Page>
          }
        />
      }
      off={
        <VStack className={styles.ArticlesPage}>
          <ArticlesPageFilterDeprectaed />
          <Page onScrollEnd={onLoadMoreArticles} saveScroll>
            <ArticlesList className={styles.list} />
          </Page>
        </VStack>
      }
    />
  );
};

export default memo(ArticlesPage);

// TODO
// Вадим Грацилёв • Вс 13 Ноя 2022
// Если при плиточном отображении на экран поместились все карточки статей из лимита, то onLoadNextPart не вызовется и статьи не подгрузятся, т.к. скролла нет.
// Станислав Шабалин
// Тут надо при инициализации проверку делать на отсутствие скрола (то есть наличие конца страницы) и делать вызов onLoadNextPart пока hasMore истина. Как-то так думаю
// Вт 15 Ноя 2022 Нравится • Подписаться

// Юлия Старченко
// Можно в Page передавать onScrollEnd только, когда не isLoading. Не знаю, хорошо ли это, но решение рабочее.
