module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/base", "plugin:vue/vue3-essential", "plugin:vue/vue3-recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "prettier/prettier": "warn",
        "no-unused-vars": "warn",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "max-len": ["error", { code: 160 }],
        "vue/no-unused-components": "warn",
    },
};
