import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
// PLUGINS
const dts = require('rollup-plugin-dts')
import postCss from 'rollup-plugin-postcss'
// PACKAGE.JSON
const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.(stories|test).tsx']
      }),
      postCss({
        plugins: [autoprefixer, cssnano()],
        // modules: {
        //   namedExport: true,
        //   //minify classnames
        //   generateScopedName: '[hash:base64:8]'
        // },
        //uncomment the following 2 lines if you want to extract styles into a separated file
        /*extract: 'styles.css',
        inject: false,*/
        minimize: true,
        sourceMap: true,
        extensions: ['.scss', '.css'],
        use: ['sass']
      })
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.(sass|scss|css)$/] /* ignore style files */,
    plugins: [dts.default()]
  }
]
