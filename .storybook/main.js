module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      'react-native': 'react-native-web',
    };
    config.resolve.extensions.push('.ts', '.tsx');

    // Return the altered config
    return config;
  },
}