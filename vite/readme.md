# Using Metro UI with Vite

## Pre-requests, installs
Install `vite` and `less` support 
```shell
npm i --save-dev vite less 
```

## Create config
Create config file named `vite.config.js`. Please view [config file](vite.config.js)

## Run command
Create run command in `package.json`

```json
{
    "scripts": {
        "build": "vite build",
        "watch": "vite"
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