const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: [ 'pug-loader' ]
            },
            {
                test: [/\.css$|.scss$/],
                use: [ MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader' ]
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    },
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                        
                    //     }
                    // },
                    // {
                    //     loader: 'url-loader',
                    // }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ 'file-loader?name=fonts/[name].[ext]' ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HTMLWebpackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            title: 'Boilerplate'
        })
    ]
}