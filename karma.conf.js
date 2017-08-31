// Karma configuration
// @author: liuhongyi

var webpack = require('webpack');

module.exports = function(config) {
    config.set({

        // 基础路径，用在files，exclude属性上
        basePath: '',

        // 测试框架
        frameworks: ['jasmine'],

        // 需要加载到浏览器的文件列表
        files: [
          'test/unit/*.spec.js'
        ],

        // 排除的文件列表
        exclude: [
        ],

        // 在浏览器使用之前处理匹配的文件
        preprocessors: {
            'test/unit/*.spec.js': ['webpack']
        },

        // 测试结果
        reporters: ['progress','coverage'],

        // 服务端口号
        port: 9876,
        colors: true,

        // 日志输出全部信息
        logLevel: config.LOG_INFO,

        // 自动检测文件变化
        autoWatch: true,

        // 测试启动的浏览器/插件
        browsers: ['PhantomJS','Chrome'],

        // 持续集成模式
        singleRun: false,

        // 并发级别（启动的浏览器数）
        concurrency: Infinity,

        // 输出的类型和目录
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        // webpack配置
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options: {
                            presets: ["es2015"]
                        }
                    },
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    }
                ]
            },
            plugins: [
                new webpack.LoaderOptionsPlugin({
                    options: {
                        // vue测试结果用isparta定位
                        vue: {
                            loaders: {
                                js: 'isparta-loader'
                            }
                        },
                        // isparta配置
                        isparta: {
                            embedSource: true,
                            noAutoWrap: true,
                            babel: {
                                presets: ['es2015']
                            }
                        }
                    }
                })
            ]
        }
    })
}
