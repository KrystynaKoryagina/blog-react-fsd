import { ReactElement } from 'react';
import { useFlag } from '@unleash/proxy-client-react';
import { FeatureFlags } from '../types/feature';

/*
  // NOTE Example of using ToggleFeatureComponent - toggle components, depending on feature flag
  
  <ToggleFeatureCompoonent
    featureName={'featureFlagName'}
    on={<SomeComponent id={id} />}
    off={<div>Some text</div>}
  />

*/

interface ToggleFeatureProps {
  featureName: FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

// TODO
export const ToggleFeatureComponent = ({
  on,
  off,
  featureName,
}: ToggleFeatureProps) => {
  const isFeatureEnabled = useFlag(featureName);

  // return isFeatureEnabled ? on : off;
  return isFeatureEnabled ? off : on;
};
