# Using Metro UI with Rollup

## Pre-requests, installs
Install `rollup`
```shell
npm i --save-dev rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve 
```
Install `css` support
```shell
npm i --save-dev less autoprefixer rollup-plugin-postcss
```


## Create config
Create config file named `rollup.config.js`. Please view [config file](rollup.config.js)

## Run command
Create run command in `package.json`

```json
{
    "scripts": {
        "build": "rollup -c",
        "watch": "rollup -c -w"
    }
}
```
and run
```shell
npm run watch
```
or build with command
```shell
npm run build
```