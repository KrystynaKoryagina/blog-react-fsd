export interface GetArticleRatingRequest {
  userId: string;
  articleId: string;
}

export interface RateArticleRequest {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}
