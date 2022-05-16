const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const { postcss } = require('postcss-preset-env');
const PostCSSPresetEnv = require('postcss-preset-env');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  stats: {
    colors: true,
    preset: 'minimal'
  },
  performance: { hints: isDev ? false : 'warning' },
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  entry: [
    path.resolve(__dirname, 'src/js/app.js'),
    path.resolve(__dirname, 'src/scss/main.scss')
  ],
  output: {
    filename: isDev ? 'js/app.js' : 'js/app.[contenthash].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'dist/'
  },
  plugins: [
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? 'css/main.css' : 'css/main.[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, 'src'),
          from: '**/*.html',
        },
      ],
    }),
    new BrowserSyncPlugin(
      {
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        proxy: 'webpack.wtf',
        files: [
          'src/**/*.html',
          'src/scss**/*.scss',
          'src/js/*.js'
        ],
      },
      {
        reload: true
      }
    )
  ],
  ...(!isDev && {
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
        new HtmlMinimizerPlugin()
      ]
    }
  }),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: 'postcss.config.js',
              },
            },
          },
          'sass-loader'
        ],
      },
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: `src/images/${isDev ? '[name][ext]' : '[contenthash][ext]'}`
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: `src/fonts/${isDev ? '[name][ext]' : '[contenthash][ext]'}`
        }
      }
    ]
  },
  resolve: {
    alias: {
      // Helpful alias for importing assets
      assets: path.resolve(__dirname, 'src')
    }
  }
};
