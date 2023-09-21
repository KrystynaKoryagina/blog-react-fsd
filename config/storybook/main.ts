const config = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        background: false,
      },
    },
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react-webpack5',
  core: {
    builder: 'webpack5',
  },
  // staticDirs: ['../../public'], // TODO
};

export default config;
