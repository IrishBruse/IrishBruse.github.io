module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "prettier",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended",
        "plugin:vue/vue3-strongly-recommended",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "prettier/prettier": "warn",
        "no-unused-vars": "warn",
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: {
                    max: 10,
                    allowFirstLine: true,
                },
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        "vue/attributes-order": [
            "error",
            {
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    ["UNIQUE", "SLOT"],
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT",
                ],
                alphabetical: true,
            },
        ],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-unused-components": "warn",
    },
};
