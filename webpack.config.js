const path = require("path");

module.exports={
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    client: {
      logging: 'none'
    },
    // contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }]
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      }

    ]
  }
}