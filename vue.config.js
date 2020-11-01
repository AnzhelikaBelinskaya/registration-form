module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/form/'
    : '/',
    configureWebpack: {
        devtool: 'cheap-module-eval-source-map'
      },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/styles/variables.sass"`
            },
            scss: {
                additionalData: `@import "~@/styles/variables.scss";`
            },
           
        }
    },
   
}