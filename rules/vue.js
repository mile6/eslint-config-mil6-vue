module.exports = {
    extends: [
        'plugin:vue/recommended',
    ],

    rules: {
        'vue/html-indent': ['error', 4],
        "vue/max-len": ["error", {
            "code": 120,
            "tabWidth": 4,
            "ignoreStrings": true,
            "ignoreHTMLAttributeValues": true,
        }],
    }
}
