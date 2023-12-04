import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from "autoprefixer"

export default {
    input: './index.js',
    output: {
        file: './dist/metro-bundle.js',
        format: 'es'
    },
    plugins: [
        postcss({
            extract: false,
            minimize: true,
            use: ['less'],
            plugins: [
                autoprefixer(),
            ]
        }),
        nodeResolve(),
        commonjs(),
    ]
}