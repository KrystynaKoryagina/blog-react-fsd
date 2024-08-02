import { removeFeatureFlag } from './removeFeatureFlag';

const removedFeatureName = process.argv[2]; // NOTE isArticleEnabled
const featureState = process.argv[3]; // NOTE on / off

if (!removedFeatureName) {
  throw new Error('Please add feature flag name');
}

if (!featureState) {
  throw new Error('Please add feature flag state (on / off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Incorrect feature flag state (on / off)');
}

removeFeatureFlag();
