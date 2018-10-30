import babel from 'rollup-plugin-babel'
import camelcase from 'lodash.camelcase'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')

const rollupConf = opts => ({
  input: 'src/index.js',
  output: [opts],
  plugins: [
    babel(),
    // https://github.com/TrySound/rollup-plugin-terser/issues/5
    terser()
  ]
})

export default [
  rollupConf({
    file: pkg.main,
    name: camelcase(pkg.name),
    format: 'umd',
    sourcemap: true
  }),
  rollupConf({
    file: pkg.module,
    format: 'esm',
    sourcemap: true
  })
]