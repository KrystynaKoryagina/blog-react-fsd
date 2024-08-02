// TODO forbidden from 'entities/User'
import { User } from '@/entities/User';

import {
  ArticleBlockTypeValues,
  ArticleCategoryValues,
} from '../consts/article';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  category: ArticleCategory[];
  blocks: ArticleBlock[];
  user: User;
}

export type ArticleCategory = ValueOf<typeof ArticleCategoryValues>;

export type ArticleBlockType = ValueOf<typeof ArticleBlockTypeValues>;

export type ArticleView = 'list' | 'grid';

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE';
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE';
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT';
  paragraphs: string[];
  title?: string;
}
