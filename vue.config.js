module.exports = {
  productionSourceMap: false,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  transpileDependencies: [/[/\\]node_modules[/\\]_sockjs-client@1.5.1@sockjs-client[/\\]dist[/\\]/],
  configureWebpack: config => {
    
  },
  devServer: {
      port: 8090,
      host: '0.0.0.0',
      https: false,
      open: true
  }
}