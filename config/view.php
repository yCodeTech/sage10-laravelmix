<?php

return [

	/*
	|--------------------------------------------------------------------------
	| View Namespaces
	|--------------------------------------------------------------------------
	|
	| Blade has an underutilized feature that allows developers to add
	| supplemental view paths that may contain conflictingly named views.
	| These paths are prefixed with a namespace to get around the conflicts.
	| A use case might be including views from within a plugin folder.
	|
	*/

	'namespaces' => [
		/*
		 | Given the below example, in your views use something like:
		 |     @include('MyPlugin::some.view.or.partial.here')
		 */
		// 'MyPlugin' => WP_PLUGIN_DIR . '/my-plugin/resources/views',

		/**
		 * SVG namespace
		 * Usage: @include('SVG::the_icon_name')
		 */
		"SVG" => get_theme_file_path() . "/resources/images/svg",
		"SVG_ICONS" => get_theme_file_path() . "/resources/images/svg/icons",
	]
];
