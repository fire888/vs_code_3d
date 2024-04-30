const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = (env, { mode }) => ({
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: "./index.js" ,
        path: path.resolve(__dirname, '../js_build'),
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './main.css',
 		}),
        new webpack.DefinePlugin({
            __MODE__: JSON.stringify(mode),
        }),
        new webpack.ProvidePlugin({
            'cannon': 'cannon',
            'babylonjs-loaders': 'babylonjs-loaders',
        }),
		// new CopyPlugin({
        //     patterns: [
        //         { from: './src/assets/icon.png', to: 'icon.png' },
        //     ],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|env|bin|glb|gltf|ogg|mp3|wav|avi|mp4|ktx2)$/i,
                type: 'asset/resource',
            },
        ],
    },
});
