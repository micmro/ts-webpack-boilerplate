# ts-webpack-boilerplate
Simple Typescript + Webpack boilerplate code.

It supports the following out of the box:
- concatination
- uglify
- tslint
- LESS
- watch
- hot reloading
- source maps

# Setup

Just install dependencies.
```
npm install
```

# Commands

## To run the dev-server:
```
npm run serve
```
It starts on `http://localhost:8080` and automatically reloads the page for all file changes.

## To run a dev-build:
```
npm run build
```
Files are stored in `./dist`

## To run a prod build with uglification and source map:
```
npm run build-prod
```