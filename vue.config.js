// vue.config.js

module.exports = {
    chainWebpack: (config) => {
        config.module
            //md
            .rule("markdown")
            .test(/\.md$/i)
            .use("raw-loader")
            .loader("raw-loader")
            .end()
            //html
            .rule("html")
            .rule(/\.html$/i)
            .use("html-loader")
            .loader("html-loader")
            .end();
    },
};
