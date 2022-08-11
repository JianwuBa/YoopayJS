const version = new Date().getTime();
const Version = new Date().getTime()
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/components/themes/_handle.scss";`
            }
        },
        // 是否使用css分离插件 ExtractTextPlugin
        extract: {
            // 修改打包后css文件名
            filename: `static/css/[name].${Version}.css`,
            chunkFilename: `static/css/[name].${Version}.css`
        }
    },
    configureWebpack: {
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            // filename: utils.assetsPath('js/[name].[chunkhash].'+Version+'js'),
            // chunkFilename: utils.assetsPath('js/[id].[chunkhash].'+Version+'js')
            filename: `static/js/[name].${Version}.js`,
            chunkFilename: `static/js/[name].${Version}.js`
        }
    },

    runtimeCompiler: true,
    devServer: {
        port: 8080, // 端口号
        // 配置代理跨域
        proxy: {
            // 指的是哪些请求会触发代理跨域，/指的是任意的请求都会触发
            '/api': {
                // target指的是代理地址，需要代理请求的地址
                // target: 'http://192.168.1.250:9090',
                // target: 'http://114.251.130.222:9090',
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    // webpack配置
    chainWebpack(config){
        // 版本号在页面显示
        config.plugin('define').tap(args => {
            args[0]['process.env'].version = JSON.stringify(version);
            return args;
        });
        // img的文件名修改
        // config.module
        // .rule('images')
        // .use('url-loader')
        // .tap(options => {
        //     options.name = `static/img/[name].${Version}.[ext]`
        //     options.fallback = {
        //         loader: 'file-loader',
        //         options: {
        //             name: `static/img/[name].${Version}.[ext]`
        //         }
        //     }
        //     return options
        // })
    }
};