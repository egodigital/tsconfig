module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "unicorn",
        "eslint-plugin-import",
        "no-null"
    ],
    "rules": {
        "camelcase": "off",
        "@typescript-eslint/array-type": "warn",
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/indent": "warn",
        "@typescript-eslint/interface-name-prefix": [
            "warn",
            {
                "prefixWithI": "always",
            },
        ],
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            },
            {
                "selector": "function",
                "format": ["camelCase"]
            },
            {
                "selector": "method",
                "format": ["camelCase"]
            },
            {
                "selector": "memberLike",
                "modifiers": ["private", "protected"],
                "format": ["camelCase"],
                "leadingUnderscore": "require"
            },
            {
                "selector": "enumMember",
                "format": ["PascalCase"]
            },
            {
                "selector": "variable",
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "should", "has", "can", "did", "will"]
            },
            {
                "selector": "variable",
                "format": ["camelCase", "UPPER_CASE"]
            },
            {
                "selector": "typeParameter",
                "format": ["PascalCase"],
                "prefix": ["T"]
            },
            {
                "selector": "parameter",
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            },
        ],

        "@typescript-eslint/quotes": [
            "warn",
            "single"
        ],
        "@typescript-eslint/semi": [
            "warn",
            "always"
        ],
        "arrow-body-style": "warn",
        "curly": "warn",
        "eqeqeq": [
            "warn",
            "always"
        ],
        "id-blacklist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "warn",
        "import/no-default-export": "warn",
        "no-null/no-null": "off",
        "no-redeclare": "warn",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "warn",
        "no-unused-expressions": "warn",
        "no-var": "warn",
        "spaced-comment": "warn",
        "unicorn/filename-case": "warn",

        "valid-jsdoc": "warn",
        "no-irregular-whitespace": "warn",
        "brace-style": "warn"
    }
};
