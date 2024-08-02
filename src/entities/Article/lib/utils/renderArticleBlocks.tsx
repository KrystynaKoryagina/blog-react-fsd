import { ArticleBlock } from '../../model/types/article';
import { ArticleCode } from '../../ui/ArticleCode/ArticleCode';
import { ArticleImage } from '../../ui/ArticleImage/ArticleImage';
import { ArticleText } from '../../ui/ArticleText/ArticleText';

export const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case 'CODE':
      return <ArticleCode key={block.id} block={block} />;
    case 'IMAGE':
      return <ArticleImage key={block.id} block={block} />;
    case 'TEXT':
      return <ArticleText key={block.id} block={block} />;
    default:
      // TODO добавить проверку как у Улби вначале видео https://www.youtube.com/watch?v=VBpmbqTi86Y&t=745s
      return null;
  }
};
