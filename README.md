# tsconfig

[![npm](https://img.shields.io/npm/v/@egodigital/tsconfig.svg)](https://www.npmjs.com/package/@egodigital/tsconfig)

Shared [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) and [tslint](https://eslint.org/docs/user-guide/configuring) config files for [e.GO](https://e-go-digital.com/) projects.

## Install

```
$ npm install --save-dev @egodigital/tsconfig
```

## Usage

### tsconfig.json

```json
{
    "extends": "@egodigital/tsconfig",
    "compilerOptions": {
        "outDir": "dist",
        "target": "es2020",
        "lib": [
            "es2020"
        ]
    }
}
```

### .eslintrc.js

```json
{
    "extends": "@egodigital/tsconfig",

    "rules": {/* your custom rules */}
}
```
