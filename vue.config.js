module.exports = {
    devServer: {
        proxy: {
            "/app": {
                target: "https://api.thebeastshop.com",
                changeOrgin: true 
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": Path.resolve(__dirname, "./src"),
                "@api": Path.resolve(__dirname, "./src/api"),
                "@common": Path.resolve(__dirname, "./src/common"),
                "@components": Path.resolve(__dirname, "./src/components"),
                "@utils": Path.resolve(__dirname, "./src/utils")
            }
        }
    }
}