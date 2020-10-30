module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/styles/variables.sass"`
            },
            scss: {
                additionalData: `@import "~@/styles/variables.scss";`
            },
           
        }
    }
}