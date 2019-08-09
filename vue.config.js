const path=require('path')

function resolve (dir) {
  return path.resolve(__dirname,dir)
}

module.exports = {
  configureWebpack:{
    resolve: {
      extensions:['js','.vue','json'],
      alias:{
        '@':resolve('src'),
        'components':resolve('src/components'),
        'pages':resolve('src/pages'),
      }
    }
  },

  //配置开发服务中的代理
  devServer: {
    proxy: {
      // 请求地址以/api开头
      '/api': {
        target: 'http://localhost:4000', // 转发的目录地址
        changeOrigin: true, // 支持跨域
         pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
           '^/api': '', // 去掉路径中的/api
         },
      },
      '/baidu': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        pathRewrite: { 
          '^/baidu': '',
        },
      },
    }
  } 

}