const path = require("path");
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
                "@": path.resolve(__dirname, "./src"),
                "@api": path.resolve(__dirname, "./src/api"),
                "@common": path.resolve(__dirname, "./src/common"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@untils": path.resolve(__dirname, "./src/untils"),
                "@views": path.resolve(__dirname, "./src/views")
            }
        }
    }
}
