import { memo } from 'react';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { HeaderDeprecated } from './HeaderDeprecated/HeaderDeprecated';
import { HeaderRedesigned } from './HeaderRedesigned/HeaderRedesigned';

export const Header = memo(() => {
  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      off={<HeaderDeprecated />}
      on={<HeaderRedesigned />}
    />
  );
});
