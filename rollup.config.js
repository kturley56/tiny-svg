import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const umdDist = 'dist/tiny-svg.js';

export default [
  // browser-friendly UMD build
  {
    input: 'lib/index.js',
    output: {
      name: 'TinySVG',
      file: umdDist,
      format: 'umd'
    }
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'TinySVG',
      file: umdDist.replace(/\.js$/, '.min.js'),
      format: 'umd'
    },
    plugins: [
      uglify()
    ]
  },
  {
    input: 'lib/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];