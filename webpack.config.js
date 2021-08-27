const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your pet app',
      shortname: 'Petgram 🐶',
      description: 'Discover the amazing pet world',
      background_color: '#F3F4F6',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: '128x128',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: '256x256',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: '384x384',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://https://petgram-server-mxrold-g0y4n7aai-mxrold.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  }
}
