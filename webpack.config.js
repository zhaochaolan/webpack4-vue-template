const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode:'development',
    entry: "/src/main.js",
    output: {
        path: path.join(__dirname,"./dist"),//打包输出路径，必须是绝对路径
        filename: "bundle.js"//打包后的js名称
    },
    devServer: {
        contentBase:path.join(__dirname,"./dist"),//打包后目录
        open:true,//打包完成自动打开浏览器预览
        quiet:true,//在terminal中显示打包信息
        progress:true,//显示打包进度
        port:3000,//不指定端口自动分配
        hot:true,//开启热更新
        clientLogLevel:'none',//关闭游览器控制台输出的热更新信息
    },
    module: {
        rules: [
            //处理css
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            //处理less
            {
                test: /\.(less)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            //处理图片
            {
                test:/\.(png|jpg|gif)$/i,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit:8192,//小于8k,用url-loader转换成base64,否则使用file-loader来处理文件
                            fallback:{
                                loader:'file-loader',
                                option:{
                                    name:'[name].[hash:8].[ext]',
                                    outputPath:'images/'
                                }
                            }
                        }
                    }
                ]
            },
            //媒体文件
            {
                test:/\\.(mp4|webm|ogg|mp3|wav|flac|aac)(\\?.*)?$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit:8192,
                            fallback:{
                                loader:'file-loader',
                                option:{
                                    name:'[name].[hash:8].[ext]',
                                    outputPath:'media/'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit:1,
                            fallback:{
                                loader:'file-loader',
                                option:{
                                    name:'[name].[hash:8].[ext]',
                                    outputPath:'fonts/'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        //html生成模板工具
        new HtmlwebpackPlugin({
            //配置html生成模板
            template: path.join(__dirname,'./src/index.html')
        }),
        //热更新插件
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}
