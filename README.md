# tsconfig

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
