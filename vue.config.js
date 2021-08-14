// vue.config.js

module.exports = {
    chainWebpack: (config) => {
        config.module
            //md
            .rule("markdown")
            .test(/\.md$/i)
            .use("raw-loader")
            .loader("raw-loader")
            .end();
    },
};
