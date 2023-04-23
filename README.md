# EXAMPLE HOW AUTOMATE GIT HOOKS WITH NODE.JS
NodeJS application with Husky and Commitlint

Testing, linting and verification of the commit message using automated  Git Hooks with help of Husky, Commitlint and lint-staged NPM packages

Required module for test is JEST
- npm install -D jest

__Two modules for automate test->commit__
***
- npm install -D pre-commit

in package.json needs add folowing 

    "pre-commit": [
       "test"
    ] >

or

- npm install -D husky