# EXAMPLE HOW AUTOMATE GIT HOOKS WITH NODE.JS
NodeJS application with Husky and Commitlint

Testing, linting and verification of the commit message using automated  Git Hooks with help of Husky, Commitlint and lint-staged NPM packages

Required module for test is JEST
```
    npm install -D jest
```
but jest understand only commonJS (modules import ex.)

__Two modules for automate test->commit__
***
```
    npm install -D pre-commit:
```
in package.json needs add folowing:
```
    "pre-commit": [
       "test"
    ]
```
__Or__
```
    npm install -D husky
    npx husky install
```

adding a hook
```
    npx husky add .husky/pre-commit "npm test"
```

__Or__
```
    npm install -D vite vitest
```
add to tests 

```
    import { assert, expect, test, it } from 'vitest'
```

update _package.json_

```
    "test": "vitest run",
```

***

## ESLINT
```
    npm install -D eslint eslint-plugin-import eslint-config-airbnb-bas
```
***

## COMMIT-LINT
installing
```
    npm install -D @commitlint/cli
```
add to husky
```
    npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

## SUMMARY

enter 
```
    npm install
```
after cloning this repository