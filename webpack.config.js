const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
    entry: './src/app/main.js',
    output: {
        path: path.join(__dirname, '/src/public/js'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    mode: 'development',
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader',
                    'image-webpack-loader'
                ]
            }
        ]
    },

    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};