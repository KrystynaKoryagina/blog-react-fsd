import { ArticleView } from 'entities/Article';

export interface ArticleViewTypes {
  view: ArticleView;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
