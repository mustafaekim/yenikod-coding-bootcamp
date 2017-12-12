const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
        , library: "myLib"
        //, libraryTarget: 'var'
    }
};