import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';

const ArticleEditPage = () => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return (
    // TODO
    // WYSIWYG Rich Text Editor
    <Page>{ isEdit ? 'Edit Page' : 'Create new article' }</Page>
  );
};

export default memo(ArticleEditPage);
