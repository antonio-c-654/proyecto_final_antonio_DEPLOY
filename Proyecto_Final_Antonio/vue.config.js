const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3000/',
        target: 'https://proyecto-final-antonio-backend.onrender.com:3000/',
        changeOrigin: true,
      }
    }
  }
  
})
