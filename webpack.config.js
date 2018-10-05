
//  webpack.config.js

//  const active_app_file = "sec012a_app.jsx";
  const active_app_file = "sec012a_app.js";

console.log (' ******** active_app_file is ->' + active_app_file);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin')

//  Turn these on as needed.
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require ('path');
const webpack = require ('webpack');

const path_public = path.join (__dirname, 'public');
const path_dist = path.join (__dirname, 'dist');
const path_favicon = path.join (__dirname, 'public', 'images');
const source_JSX = path.join (__dirname, 'src', active_app_file);
const index_html_template = path.join (__dirname, 'src', 'index.html');

//  Try using resolve instead of join:
// const path_public = path.resolve (__dirname, 'public');
// const path_dist = path.resolve (__dirname, 'dist');
// const path_favicon = path.resolve (__dirname, 'public', 'images');
// const source_JSX = path.resolve (__dirname, 'src', active_app_file);
// const index_html_template = path.resolve (__dirname, 'src', 'index.html');

//  const path_styles = path.join (__dirname, 'src', 'styles');


//  This did not work
//  const source_JSX = "K:\\A01_Udemy\\Budget-app_03\\src\\sec012a_app.js";
//  const index_html_template = "K:\\A01_Udemy\\Budget-app_03\\src\\index.html";
//  This did not work
// const source_JSX = "K:/A01_Udemy/Budget-app_03/src/sec012a_app.js";
// const index_html_template = "K:/A01_Udemy/Budget-app_03/src/index.html";

console.log (' --- path is ', __dirname);
console.log ( ' --- path_public is ', path_public);
console.log ( ' --- path_dist is ', path_dist);
console.log ( ' --- path_favicon is ', path_favicon);
console.log ( ' --- source_JSX is ', source_JSX);
console.log ( ' --- index_html_template is ', index_html_template);

//=======================================================================

    const loader_with_source_map = (P_loader) =>
    {
        return ( { loader: P_loader, options: { sourceMap: true } } );
    }

    const copy_webpack_plugin = () =>
    {
        return new CopyWebpackPlugin (
            [ { from: path_favicon }], { copyUnmodified: true }
            );
    }

    const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
                  inject: 'body',
                  hash: true,
                  template: index_html_template,
                  filename: 'index.html'
            });

function build_config (env)  {

    const build_config_obj =
    {
        entry: source_JSX,
        output:
        {
            filename: '[name].[chunkhash].js'
        },
        module:
        {
            rules :
            [
              {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
              },
                {
                    test: /\.s?css$/,
                    use:
                    [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        loader_with_source_map('css-loader'),
                        loader_with_source_map('postcss-loader'),
                        loader_with_source_map('sass-loader')
                    ]
                },
                {
                   test: /\.(jpg|jpeg|gif|png|ico)$/,
                   exclude: /node_modules/,
                   loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
                }
            ]
        },
        optimization: {
          // minimizer: [new UglifyJsPlugin()]
        },
        plugins:
        [
            //  https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
            // load `moment/locale/ja.js` and `moment/locale/it.js`
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),

            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

            new CleanWebpackPlugin(path_dist, {} ),

            new MiniCssExtractPlugin({
                  filename: 'style.[contenthash].css',
            }),
            HtmlWebpackPluginConfig,
            new WebpackMd5Hash(),

            copy_webpack_plugin ()
        ]
    };


    console.log (`env --- ${env}`)

//    mode: "development",
//    mode: "production",
//    mode: "none",

    if (env === 'production')
    {
        build_config_obj.devtool = 'source-map';
        build_config_obj.mode = "production";
        build_config_obj.output.path = path_dist;
        //build_config_obj.output.path = path_public;

        build_config_obj.optimization.splitChunks =
        {
              // include all types of chunks
            chunks: 'all'
        }

 //  https://www.npmjs.com/package/webpack-bundle-analyzer

        // USE THIS to generate HTML representation in browser.
        //build_config_obj.plugins.push(new BundleAnalyzerPlugin());

        // USE THIS to generate JSON file.
        // build_config_obj.plugins.push(new BundleAnalyzerPlugin(
        // {
        //     analyzerMode: "disabled",
        //     generateStatsFile: true,
        //     statsFilename: "BundleAnalyzer_01.json",
        //     defaultSizes: "parsed"
        // }
        //  ) );
    }
    else
    if (env === 'development')
    {
        //build_config_obj.devtool = 'cheap-module-eval-source-map';
        build_config_obj.devtool = 'inline-source-map';
        build_config_obj.mode = "development";
        build_config_obj.output.path = path_public;

        build_config_obj.devServer = {
            //contentBase: dist_path,
            contentBase: path_public,
            host: "0.0.0.0",
            port: 9900,
            historyApiFallback: true,
        };
    }
    else
        console.log (`   *** BAD PARAMETER for env: ${env}`)

    return build_config_obj;
};
//   END: function build_config (env)


module.exports = build_config;
