module.exports =
  { name: 'client',

    entry: {
      main: './public/index.js',
      stream: './public/streamPage.js'
    },

    output: {
      filename: './public/[name].js'
    },

    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    }, 

    devtool: 'source-map'
  };
