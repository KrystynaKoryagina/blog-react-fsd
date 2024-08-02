import { memo, useCallback, useMemo } from 'react';
import GridIconDeprecated from '@/shared/assets/icons/deprecated/grid.svg';
import ListIconDeprecated from '@/shared/assets/icons/deprecated/list.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { classNames } from '@/shared/lib/utils/classNames';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { ArticleView } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { ArticleViewTypes } from '../model/types/articleView';
import styles from './ArticleViewSwitcher.module.scss';
import {
  ToggleFeatureComponent,
  toggleFeature,
} from '@/shared/lib/utils/toggleFeature';
import { useUnleashClient } from '@unleash/proxy-client-react';
import { UICard } from '@/shared/ui/UICard';
import { UIButton } from '@/shared/ui/UIButton';

interface ArticleViewSwitcherProps {
  view: ArticleView;
  className?: string;
  changeView?: (view: ArticleView) => void;
}

export const ArticleViewSwitcher = memo(
  ({ view, className, changeView }: ArticleViewSwitcherProps) => {
    const client = useUnleashClient();

    const viewTypes: ArticleViewTypes[] = useMemo(
      () => [
        {
          view: 'grid',
          Icon: toggleFeature({
            featureName: 'isRedesignEnable',
            on: () => GridIcon,
            off: () => GridIconDeprecated,
            client,
          }),
        },
        {
          view: 'list',
          Icon: toggleFeature({
            featureName: 'isRedesignEnable',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
            client,
          }),
        },
      ],
      [client],
    );

    const onChangeView = useCallback(
      (newView: ArticleView) => () => {
        changeView?.(newView);
      },
      [changeView],
    );

    return (
      <ToggleFeatureComponent
        featureName="isRedesignEnable"
        on={
          <UICard className={className} padding="2" direction="row">
            {viewTypes.map((item) => (
              <div
                className={classNames(styles.ArticleViewSwitcher, [], {
                  [styles.selected]: view === item.view,
                })}
                key={item.view}
              >
                <UIButton variant="icon" onClick={onChangeView(item.view)}>
                  <item.Icon className={styles.icon} width={32} height={32} />
                </UIButton>
              </div>
            ))}
          </UICard>
        }
        off={
          <HStack className={className} gap="8">
            {viewTypes.map((item) => (
              <Button
                variant={ButtonType.GHOST}
                key={item.view}
                onClick={onChangeView(item.view)}
              >
                <item.Icon
                  className={classNames(styles.icon, [], {
                    [styles.iconSelected]: view === item.view,
                  })}
                  width={25}
                  height={25}
                />
              </Button>
            ))}
          </HStack>
        }
      />
    );
  },
);
