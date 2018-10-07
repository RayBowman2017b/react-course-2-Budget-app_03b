
//  server_135.js

//  SEC_013 --- 135. A Production Web Server with Express 13:14

//  node A02_sec013_135_server\server_135.js

const express = require('express');
const app = express();
const path = require('path');
const public_path = path.join(__dirname, '..', 'public');
const dist_path = path.join(__dirname, '..', 'dist');
//const default_path = path.join(public_path, 'index.html');
const default_path = path.join(dist_path, 'index.html');

const port = process.env.port || 3000;
const port_set_from_env = !! process.env.port;

const webpack = require("webpack");

//  This is for building before running the server

//import webpackMiddleware from 'webpack-dev-middleware';
//import webpackConfig from '../webpack.config.js';
// const webpackMiddleware = require ('webpack-dev-middleware');
// const webpackConfig = require ('../webpack.config.js');

const webpackConfig = require ('../webpack.config.js');

//------------------------------------------------------------------
//    The following was lifted from the webpack node API docs

//  https://webpack.js.org/api/node/
//  https://webpack.js.org/api/node/#error-handling

const config_obj =  webpackConfig ('production');

webpack(
  // Configuration Object
  config_obj,
 (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  // Log result...
});

//------------------------------------------------------------------

//  use the middleware express.static(public_path)
//  app.use(express.static(public_path));
  app.use(express.static(dist_path));

//  This is for building before running the server

//  app.use(webpackMiddleware(webpack(webpackConfig('production'))));

function unhandled_requests (req, res)
{
    res.sendFile(default_path);
}

//  match all unmatched routes --- *
app.get ('*', unhandled_requests);
//  path

function listen_handler ()
{
    console.log (`server is up --- port is ${port} --- port_set_from_env ${port_set_from_env}`);
}

app.listen(port, listen_handler);
