module.exports = {
    extends: [
        'plugin:vue/recommended',
    ],

    rules: {
        'vue/html-indent': ['error', 4],
        "vue/max-len": ["error", {
            "code": 150,
            "tabWidth": 4,
            "ignoreStrings": true,
            "ignoreUrls": true,
            "ignoreHTMLAttributeValues": true,
        }],
    }
}
