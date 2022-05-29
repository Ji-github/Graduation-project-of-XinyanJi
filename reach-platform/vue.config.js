module.exports = {
    lintOnSave: false,
    publicPath: './',
    assetsDir: 'static',
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.ts',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '揽月平台',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/ocp': {
                target: 'http://127.0.0.1:9527'
            },

        },
        public: '0.0.0.0:8080'
    },
    // less-loader >= 6.0.0
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
    // less-loader < 6.0.0
};
