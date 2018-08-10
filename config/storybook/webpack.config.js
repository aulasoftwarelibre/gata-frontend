const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.tsx?$/,
        loader: require.resolve('awesome-typescript-loader'),
    });
    config.plugins.push(new TSDocgenPlugin());
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TSConfigPathsPlugin);

    return config;
};