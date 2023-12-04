# Build a Metro UI bundle with Webpack

## Pre-requests, installs
Install `webpack`
```shell
npm i --save-dev webpack webpack-cli 
```
Install `css` support
```shell
npm i --save-dev less style-loader css-loader less-loader
```

## Create config
Create config file named `webpack.config.js`. Please view [config file](webpack.config.js)

## Run command
Create run command in `package.json`

```json
{
    "scripts": {
        "build": "webpack",
        "watch": "webpack --watch"
    }
}
```
and run
```shell
npm run build
```