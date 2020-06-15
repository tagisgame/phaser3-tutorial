import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: [
        './src/Game.ts'
    ],
    output: {
        file: './build/game.js',
        name: 'MyGame',
        format: 'iife',
        sourcemap: true,
        intro: 'var global = window;'
    },
    plugins: [
        resolve({
            extensions: [ '.ts', '.tsx' ]
        }),
        commonjs({
            include: [
                'node_modules/eventemitter3/**',
                'node_modules/phaser/**'
            ],
            exclude: [
                'node_modules/phaser/src/polyfills/requestAnimationFrame.js'
            ],
            sourceMap: true,
            ignoreGlobal: true
        }),
        typescript(),
        //uglify(),
        serve({
            open: true,
            contentBase: 'build',
            host: 'localhost',
            port: 3001,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })

    ]
};
