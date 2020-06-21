const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');
const { resolve } = require('path');
const { dir } = require('console');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
        views: path.resolve(__dirname, "./src/views"),

    })
);