import { createSelector } from 'reselect';
import { getUserAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article';

export const getArticleCanEdit = createSelector(
  getUserAuthData,
  getArticleData,
  (user, article) => {
    if (!user || !article) {
      return false;
    }

    return user?.id === article?.user.id;
  },
);
