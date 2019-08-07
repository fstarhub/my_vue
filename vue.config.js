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
 /*  devServe:{
    proxy:{
      '/api':{
        target:'http://localhost:4000',//转发的目录地址
        changeOrigin:true,//支持跨域
        pathRewriter:{
          '^/api':'',
        }
      }
    },
    '/baidu':{
      target:'http://www.baidu.com',
      changeOrigin:true,
      pathRewriter:{
        '^/baidu':'',
      },
    }
  } */

}