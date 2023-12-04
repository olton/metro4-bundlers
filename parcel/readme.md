# Using Metro UI with Parcel

## Pre-requests, installs
Install `parcel`
```shell
npm i --save-dev parcel @parcel/transformer-less
```
Install `css` support (for windows)
```shell
npm i --save-dev lightningcss-win32-x64-msvc
```
> for other `OS` please see parcel docs.

## Run command
Create run command in `package.json`

```json
{
    "scripts": {
        "build": "npx parcel index.html"
    }
}
```
and run
```shell
npm run build
```