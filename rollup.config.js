import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/word-tooltip-library.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/word-tooltip-library.esm.js',
      format: 'es',
    },
    {
      file: 'dist/word-tooltip-library.umd.js',
      format: 'umd',
      name: 'WordTooltipLibrary',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],  // Here we define the preset
    }),
  ],
};
