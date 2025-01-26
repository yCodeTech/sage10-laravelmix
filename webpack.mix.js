const mix = require('laravel-mix');
let fs = require('fs');
let path = require('path');

/**
 *
 * Commands:
 *
 * 		npx mix watch
 *
 * 		npx mix --production
 *
 */

/**
 * Setup browser sync (comment out if you don't want it)
 *
 * Proxy must be the same as .env WP_HOME. (.test is the default domain for valet).
 */
mix.browserSync({
	proxy: 'http://project-name.test',
});

/**
 * Disable the constant system notifications on Windows.
 */
mix.disableNotifications();

/**
 * setup general build/output folder
 */
mix.setPublicPath('./public');

/**
 * Setup main scss file to compile.
 */
mix.sass('resources/scss/main.scss', 'css')
	.sass('resources/scss/critical.scss', 'css')
	.options({
		processCssUrls: false,
		autoprefixer: {
			options: {
				grid: true,
			},
		},
	});

/**
 *
 * This declares that jQuery is loaded externally (using one wordpress natively)
 */
mix.webpackConfig({
	externals: {
		jquery: 'jQuery',
	},
});

mix.autoload({
	jquery: ['$', 'window.jQuery'],
});

/**
 * Setup JS file to compile
 */

mix.js('resources/js/main.js', 'js');
mix.js('resources/js/templates/front-page.js', 'js');

mix.copyDirectory('resources/images', 'public/images').copyDirectory(
	'resources/fonts',
	'public/fonts'
);

mix.sourceMaps(true, 'source-map').version();

mix.after(() => {
	let manifest = JSON.parse(
		fs.readFileSync('./public/mix-manifest.json').toString()
	);

	let manifest2 = {};

	for (let path of Object.keys(manifest)) {
		let newPath = path.replace(/^\//, '');
		manifest2[newPath] = manifest[path].replace(/^\//, '');
	}

	fs.writeFileSync(
		'./public/mix-manifest.json',
		JSON.stringify(manifest2, null, 2)
	);
});
