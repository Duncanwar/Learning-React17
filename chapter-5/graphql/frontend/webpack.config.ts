// Dependencies
import path from "path";
import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Environment
const isProduction = process.env.NODE_ENV === "production";

const webpackConfig: Configuration = {
  devtool: !isProduction ? "source-map" : false,
  target: "web",
  mode: isProduction ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    fallback: {
      // This is to fix the polifylls errors
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      // This will split our bundle into vendor.js and main.js
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      publicPath: !isProduction ? "http://localhost:8080/" : "", // For dev we will read the bundle from localhost:8080  (webpack-dev-server)
    }),
  ],
};

export default webpackConfig;
