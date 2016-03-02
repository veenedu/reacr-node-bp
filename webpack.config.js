var webpack = require('webpack');

module.exports ={
  //for debuging
  devtool:'eval-source-map',

  entry: __dirname +'/app_client/app.js',
  output:{
    path:__dirname +'/public',
    filename: 'bundle.js'
  },

  //Plugins
  // plugins: [new webpack.optimize.UglifyJsPlugin({minimize: true})],

  //development srver
  devServer:{
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },

  //Loaders
  module:{
    loaders:[{
      test: /\.json$/,
      loader: "json"
    },
    {
      test: /\.js$/,
      exclude:"/node_modules/",
      loader: "babel",
      query:{
        presets:["es2015","react"]
      }
    }]
  }
};
