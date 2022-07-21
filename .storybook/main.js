const path = require('path');

module.exports = {
  // stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: [
    {
      // 👇 The directory field sets the directory your stories
      // directory: '../packages/stories',
      directory: '../stories',
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: 'DS-Components',
      // 👇 Storybook will load all files that contain the stories extension
      files: '*.stories.*',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     cssLoaderOptions: {
    //       // When you have splitted your css over multiple files
    //       // and use @import('./other-styles.css')
    //       importLoaders: 1,
    //     },
    //     postcssLoaderOptions: {
    //       // When using postCSS 8
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],
  framework: '@storybook/angular',
  core: {
    builder: 'webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
