// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const pkg = require("./package.json");
const FileManagerPlugin = require("filemanager-webpack-plugin"); //压缩zip
const appName = pkg.name;
const stylesHandler = "style-loader";
//const Buffer = require("buffer").Buffer;
const isProduction = process.env.NODE_ENV == "production";
console.info("isProduction", isProduction, process.env.NODE_ENV);
const config = {
  entry: {
    app: {
      //注入页面的脚本
      import: "./src/app.ts",
      filename: "js/app.[hash].js",
      library: {
        type: "self",
        umdNamedDefine: false,
      },
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: {
      //keep: /\/ignored\//, // 保留 'ignored/dir' 下的静态资源
    },
    /*       chunkFormat: "commonjs",
      libraryTarget: "commonjs",
      globalObject: 'this',, */
    library: {
      /**
       * https://webpack.docschina.org/configuration/output/#outputlibrarytype
       * 类型默认包括 'var'、'module'、'assign'、'assign-properties'、'this'、'window'、'self'、'global'、
       * 'commonjs'、'commonjs2'、'commonjs-module'、'amd'、'amd-require'、'umd'、'umd2'、'jsonp' 以及 'system'，
       */
      type: "commonjs2",
      umdNamedDefine: true,
    },
  },
  target: "web",
  node: {
    global: true,
    __filename: false,
    __dirname: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".vue"],
    alias: {
      // 配置目录别名，来确保模块引入变得更简单
      // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
      //components: path.join(root, 'src/components'),
      //views: path.join(root, 'src/views'),
      //styles: path.join(root, 'src/styles'),
      //store: path.join(root, 'src/store')
      "@": path.resolve("src"),
      "@coms": path.resolve("src/coms"),
      "@public": path.resolve("public"),
      //process: "process/browser",
    },
    fallback: {
      //自定义require的模块 如 require("os") 等
      //util: require.resolve("util"),
      //assert: require.resolve("assert"),
      buffer: require.resolve("buffer"),
      //stream: require.resolve("stream-browserify"),
      //path: require.resolve("path-browserify"),
      //http: require.resolve("stream-http"),
      //https: require.resolve("https-browserify"),
      //crypto: require.resolve("crypto-browserify"),
      //querystring: require.resolve("querystring-es3"),
      //url: require.resolve("url"),
      process: require.resolve("process"),
    },
  },
  externals: {
    //"@ai-lion/liondb": "@ai-lion/liondb",
  },
  devServer: {
    open: false,
    host: "localhost",
    port: 9000,
    hot: true,
    client: {
      progress: true,
    },
    //contentBase: path.resolve("dist"),
    historyApiFallback: {
      index: "/index.html", //与output的publicPath
      rewrites: [{ from: /\.html$/, to: "/index.html" }],
    },
    allowedHosts: "all",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.vue$/i,
        use: ["vue-loader"],
      },
      /*          {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: "asset",
         }, */
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset", //asset asset/resource asset/inline asset/source   https://juejin.cn/post/6983985071699001357
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024,
          },
        },
        generator: {
          // [ext]前面自带"."
          filename: "fonts/[name][ext]", //自定义输出目录
        },
      },
      {
        test: /\.(jpeg|png|jpg|gif|icon)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024,
          },
        },
        generator: {
          // [ext]前面自带"."
          filename: "images/[name][ext]", //自定义输出目录
        },
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },

  plugins: [
    // 目标为 nodejs 环境使用
    /*       new webpack.ProvidePlugin({
         Buffer: ["buffer", "Buffer"],
      }), 
      */
    new webpack.ProvidePlugin({
      process: "process",
      Buffer: ["buffer", "Buffer"],
      stream: "stream",
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "player",
      filename: "index.html", // 打包输出后该html文件的名称
      chunks: ["app"], // 数组元素为chunk名称，即entry属性值为对象的时候指定的名称，index页面只引入 view.js
    }),
    /*   new webpack.BannerPlugin({
         banner: "*! https://www.ivideos.one *",
         raw: true,
      }), */
    /*       new webpack.BannerPlugin({
         banner: "#!/usr/bin/env node",
         raw: true,
         include: [/lib/], //包含哪些文件需要添加头部
      }), */
    new FileManagerPlugin({
      // https://www.npmjs.com/package/filemanager-webpack-plugin
      events: {
        onEnd: {
          //delete: [],
          //move: [{ source: "dist-ext/chrome/js/mds.js", destination: "dist-ext/mds.js" }],
          copy: [{ source: "public", destination: "dist" }],
          //move: [{ source: "dist-ext/content-script-no.js", destination: "dist-ext/chrome-no/js/content-script.js" }],
          //mkdir: ["/path/to/directory/", "/another/directory/"],
          //archive: [{ source: "dist-ext/chrome", destination: "dist-ext/" + appName + ".zip" }],
        },
      },
    }),
  ],
  optimization: {
    minimize: isProduction ? true : false,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
