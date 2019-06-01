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
                "@utils": path.resolve(__dirname, "./src/utils")
            }
        }
    }
}

// module.exports = {
//     devServer: {
//         proxy: {
//             "/api": {
//                 target: "http://39.97.33.178",
//                 changeOrigin: true
//             }
//         }
//     },
//     configureWebpack: { //覆盖webpack的配置项
//         resolve: { //配置别名
//             alias: {
//                 "@": path.resolve(__dirname, "./src"),
//                 "@common": path.resolve(__dirname, "./src/common"),
//                 "@api": path.resolve(__dirname, "./src/api"),
//                 "@components": path.resolve(__dirname, "./src/components"),
//                 "@utils": path.resolve(__dirname, "./src/utils")
//             }
//         }
//     }
// }