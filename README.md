# tsconfig

[![npm](https://img.shields.io/npm/v/@egodigital/tsconfig.svg)](https://www.npmjs.com/package/@egodigital/tsconfig)

Shared [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) and [tslint](https://palantir.github.io/tslint/) config files for [e.GO](https://e-go-digital.com/) projects.

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
        "target": "es2018",
        "lib": [
            "es2018"
        ]
    }
}
```

### tslint.json

```json
{
    "extends": "@egodigital/tsconfig",
    "rules": {
        "semicolon": [
            true,
            "always"
        ]
    }
}
```

## Extended Settings

If you experience problems with the validation in Visual Studio Code try other settings:

### tsconfig.json

```json
{
    "extends": "@egodigital/tsconfig",
    "compilerOptions": {
        "outDir": "dist",
        "target": "es2019",
        "removeComments": true,
        "lib": [
            "es2019"
        ],
        "rootDir": "../"
    },
    "include": [
        "src/**/*",
        "src/*.ts",
    ],
    "exclude": [
        "node_modules"
    ]
}
```

### tslint.json

```json
{
    "extends": "@egodigital/tsconfig/tslint.json",
    "rules": {}
}
```