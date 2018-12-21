module.exports = {
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module"
    },
    extends: [
        'plugin:vue/essential',
        "airbnb-base",
    ],
    rules: {
        'no-new': 0,
        "indent": ["error", 4],
        "max-len": 0,
        "import/no-unresolved": 0,
    }
};
