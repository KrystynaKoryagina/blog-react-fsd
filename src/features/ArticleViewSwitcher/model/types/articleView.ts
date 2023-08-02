export type ArticleView = 'list' | 'grid';

export interface ArticleViewTypes {
  view: ArticleView;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
