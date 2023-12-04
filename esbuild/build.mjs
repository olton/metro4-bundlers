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