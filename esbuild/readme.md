# Using Metro UI with esbuild

## Pre-requests, installs
Install `esbuild`
```shell
npm install --save-exact --save-dev esbuild
```
Install `less` support
```shell
npm i --save-dev esbuild-plugin-less
```
## Create build file
To build a bundle, you can use cli or create [build file](build.mjs):
```javascript
import * as esbuild from "esbuild"
import { lessLoader } from 'esbuild-plugin-less'

await esbuild.build({
    entryPoints: ['index.js'],
    bundle: true,
    outdir: 'dist',
    platform: 'node',
    plugins: [
        lessLoader(),
    ]
})
```

## Run command
Create run command in `package.json`

```json
{
    "scripts": {
        "build": "node build.mjs"
    }
}
```
and run
```shell
npm run build
```