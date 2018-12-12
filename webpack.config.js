const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, '/src/public/js'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
                test: /\.js$/, //que lea todos los .js
                exclude: /node_modules/, //que ignore esta carpeta
                use: {
                    loader: 'babel-loader' //que use este traductor
                }
            },
            {
                test: /\.vue$/, //que lea los .vue
                loader: 'vue-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};