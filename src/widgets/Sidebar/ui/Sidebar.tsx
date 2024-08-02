import { memo } from 'react';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { SidebarDeprecated } from './SidebarDeprecated/SidebarDeprecated';
import { SidebarRedesigned } from './SidebarRedesigned/SidebarRedesigned';

export const Sidebar = memo(() => {
  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      off={<SidebarDeprecated />}
      on={<SidebarRedesigned />}
    ></ToggleFeatureComponent>
  );
});
