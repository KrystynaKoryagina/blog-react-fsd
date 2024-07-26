import { UnleashClient } from '@unleash/proxy-client-react';
import { FeatureFlags } from '../types/feature';

/*
  // NOTE Example of using toggleFeature - toggle functions or other data, except of components, depending on feature flag
  
  import { useUnleashClient } from '@unleash/proxy-client-react';

  ....

  const client = useUnleashClient();

  const func1 = () => {
    return 'some data 1';
  };

  const func2 = () => {
    return 'some data 2';
  };

  toggleFeature({
    featureName: 'featureFlagName',
    off: () => func1(),
    on: () => func2(),
    client,
  });

*/

interface ToggleFeatureOptions<T, P> {
  featureName: FeatureFlags;
  client: UnleashClient;
  on: (...arg: any) => T;
  off: (...arg: any) => P;
}

// TODO
export function toggleFeature<T, P>({
  featureName,
  client,
  off,
  on,
}: ToggleFeatureOptions<T, P>): T | P {
  // TODO fix for storybook
  if (client?.isEnabled(featureName)) {
    // return on();
    return off();
  }

  // return off();
  return on();
}
