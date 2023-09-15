const config = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-webpack5',
  core: {
    builder: 'webpack5',
  },
  // staticDirs: ['../../public'],
};

export default config;
