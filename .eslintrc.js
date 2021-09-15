module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "prettier",
        'plugin:vue/vue3-recommended',
        "plugin:vue/vue3-strongly-recommended",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-unused-vars": "warn",

        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-unused-components": "warn",
        "vue/html-indent": ["error", 4],
        "vue/require-default-prop": "off",
        "vue/max-attributes-per-line": ["warn", {
            "singleline": {
                "max": 10,
                "allowFirstLine": true
            }, "multiline": {
                "max": 10,
                "allowFirstLine": true
            }
        }]
    },
};
