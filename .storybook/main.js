const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const modulesPath = path.resolve(__dirname, '../src/components');

module.exports = {
  webpackFinal: (config) => {
    // This is so we get consistent results when loading .ts/tsx and .mdx files
    const babelPresetEnvConfig = [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ];
  
    // Add `.ts` and `.tsx` as a resolvable extension.
    config.resolve.extensions = ['.js', '.jsx'];
  
    // This is required for @storybook/addon-docs until we can upgrade to Storybook 6
    // If left out, then a dep of addon-docs, acorn-jsx, is shipped as ES6 which will cause issues in browsers like IE11\
    // See: https://github.com/storybookjs/storybook/issues/8884
    config.module.rules.push({
      test: /\.?js$/,
      include: new RegExp(`node_modules\\${path.sep}acorn-jsx`), // https://github.com/storybookjs/storybook/pull/9790/files#diff-3f9960d4367e0d7176bea0f6d79a54e7R55
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [[require.resolve('@babel/preset-env'), {modules: 'commonjs'}]],
          },
        },
      ],
    });
  
    config.module.rules.push({
      test: /\.mdx$/,
      include: [modulesPath],
      exclude: [/node_modules/],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [babelPresetEnvConfig],
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {compilers: [createCompiler()]},
        },
      ],
    });
  
    // Load the source code of story files to display in docs.
    config.module.rules.push({
      test: /stories.*\.js?$/,
      include: [modulesPath],
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {parser: 'javascript'},
        },
      ],
      enforce: 'pre',
    });
  
    return config;
  },
  stories: ['../stories/**/*.stories.@(js|mdx)', '../src/components/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-docs/register']
};