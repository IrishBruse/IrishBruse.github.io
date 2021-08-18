module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "prettier",
        "plugin:vue/vue3-strongly-recommended",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "prettier/prettier": "warn",
        "no-unused-vars": "warn",

        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-unused-components": "warn",
    },
};
