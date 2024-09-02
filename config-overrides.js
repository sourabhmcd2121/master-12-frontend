const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer/'),
    };
    config.plugins = (config.plugins || []).concat([
        new NodePolyfillPlugin({
            excludeAliases: ['console']
        })
    ]);
    return config;
};
