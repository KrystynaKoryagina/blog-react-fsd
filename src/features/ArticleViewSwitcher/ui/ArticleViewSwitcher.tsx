import { memo } from 'react';
import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { classNames } from 'shared/lib/utils/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import { ArticleView, ArticleViewTypes } from '../model/types/articleView';
import styles from './ArticleViewSwitcher.module.scss';

const viewTypes: ArticleViewTypes[] = [
  {
    view: 'grid',
    Icon: GridIcon,
  },
  {
    view: 'list',
    Icon: ListIcon,
  },
];

interface ArticleViewSwitcherProps {
  view: ArticleView,
  className?: string,
  changeView?: (view: ArticleView) => void
}

export const ArticleViewSwitcher = memo(({
  view,
  className,
  changeView,
}: ArticleViewSwitcherProps) => {
  const onChangeView = (newView: ArticleView) => () => {
    changeView?.(newView);
  };

  return (
    <div className={classNames(styles.ArticleViewSwitcher, [className])}>
      {viewTypes.map((item) => (
        <Button
          variant={ButtonType.GHOST}
          key={item.view}
          onClick={onChangeView(item.view)}
        >
          <item.Icon className={classNames(styles.icon, [], {
            [styles.iconSelected]: view === item.view,
          })}
          />
        </Button>
      ))}
    </div>
  );
});
