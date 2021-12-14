module.exports = {
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'object-shorthand': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'prefer-rest-params': 'error',
        'default-param-last': 'error',
        'camelcase': ['warn', {
            'ignoreGlobals': true,
            'ignoreImports': true,
        }],
        'new-cap': 'error',
        'no-restricted-globals': 'error',
        'no-useless-concat': ['error'],
        'arrow-parens': ['error', 'as-needed'],
    }
}
