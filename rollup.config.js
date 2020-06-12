import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import image from 'rollup-plugin-img';

export default {
	input: ['src/index.js'],
	output: {
		file: 'build/index.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve(),
		babel(),
		postcss({
      plugins: []
		}),
		image({
			output: `build/images`,
      limit: 10000
    })
  ]
};
