const mix = require("laravel-mix");
let fs = require("fs");
let path = require("path");
const sassGlobImporter = require('node-sass-glob-importer');

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
	proxy: "http://project-name.test",
});

/**
 * Disable the constant system notifications on Windows.
 */
mix.disableNotifications();

/**
 * setup general build/output folder
 */
mix.setPublicPath("./public");

/**
 * Setup main scss file to compile.
 */
mix.sass("resources/styles/main.scss", "styles", {
	sassOptions: {
		importer: sassGlobImporter(),
		logger: {
			debug(message, options) {
				var log = "Debugging (sass @debug) ::: \n\n";

				if (options.span) {
					const span = options.span;
					log += `${message} at\n\n` +
						`${span.url}:${span.start.line} `;
				} else {
					log += `${message} at\n\n` + options.stack;
				}
				log += "\n\n::::::::::::::::\n\n"

				console.log(log);
			},
			warn(message, options) {
				var log = "Debugging (sass @warn) ::: \n\n";

				if (options.span) {
					const span = options.span;
					log += `${message} at\n\n` +
						`${span.url}:${span.start.line} `;
				} else {
					log += `${message} at\n\n` + options.stack;
				}
				log += "\n\n::::::::::::::::\n\n"

				console.log(log);
			}
		},
	}
})
	.sass("resources/styles/critical.scss", "styles")
	.options({
		processCssUrls: false,
		autoprefixer: {
			options: {
				grid: true,
			},
		}
	});

/**
 *
 * This declares that jQuery is loaded externally (using one wordpress natively)
 */
mix.webpackConfig({
	externals: {
		jquery: "jQuery",
	},
});

mix.autoload({
	jquery: ["$", "window.jQuery"],
});

/**
 * Setup JS file to compile
 */

mix.js("resources/scripts/main.js", "scripts");
mix.js("resources/scripts/templates/front-page.js", "scripts");


mix.copyDirectory("resources/images", "public/images")
	.copyDirectory("resources/fonts", "public/fonts");

mix.sourceMaps(true, "source-map").version();

mix.after(() => {
	let manifest = JSON.parse(
		fs.readFileSync("./public/mix-manifest.json").toString()
	);

	let manifest2 = {};

	for (let path of Object.keys(manifest)) {
		let newPath = path.replace(/^\//, "");
		manifest2[newPath] = manifest[path].replace(/^\//, "");
	}

	fs.writeFileSync(
		"./public/mix-manifest.json",
		JSON.stringify(manifest2, null, 2)
	);
});
