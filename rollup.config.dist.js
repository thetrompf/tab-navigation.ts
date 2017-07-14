import fs from 'fs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import ts from 'rollup-plugin-ts';
import typescript from 'typescript';

const tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json').toString());

export default {
    context: 'window',
    entry: 'src/index.ts',
    external: ['react', 'react-dom', 'prop-types'],
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
    },
    plugins: [
        'external-helpers',
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        resolve(),
        ts({
            typescript: typescript,
            tsconfig: Object.assign({}, tsconfig.compilerOptions, {
                module: 'es2015',
                target: 'es2015',
            }),
        }),
    ],
    targets: [
        {
            dest: 'dist/bundle.amd.js',
            format: 'amd',
            moduleName: 'tab-navigation',
        },
        {
            dest: 'dist/bundle.umd.js',
            format: 'umd',
            moduleName: 'tab-navigation',
        },
    ],
};