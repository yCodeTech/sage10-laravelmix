<?php

/**
 * Theme setup.
 */

namespace App;

/**
 * Register the theme scripts and styles.
 *
 * @return void
 */
add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style('sage/main.css', asset_path('styles/main.css'), false, null);
		wp_enqueue_script('sage/main.js', asset_path('scripts/main.js'), ['jquery'], null, true);

		if (is_front_page()) {
			wp_enqueue_script('sage/front-page.js', asset_path('scripts/front-page.js'), ['jquery'], null, true);
		}

		// Move Wordpress jQuery to footer
		wp_scripts()->add_data('jquery', 'group', 1);
		wp_scripts()->add_data('jquery-core', 'group', 1);
		wp_scripts()->add_data('jquery-migrate', 'group', 1);
	},
	100
);

/**
 * Inject critical CSS to head
 */
add_action(
	'wp_head',
	function () {
		$critical = @realpath(asset_path('styles/critical.css'));
		if (file_exists($critical)) {
			echo '<style>' . @file_get_contents($critical) . '</style>';
		}
	},
	10
);


/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action(
	'after_setup_theme',
	function () {
		/**
		 * Disable full-site editing support.
		 *
		 * @link https://wptavern.com/gutenberg-10-5-embeds-pdfs-adds-verse-block-color-options-and-introduces-new-patterns
		 */
		remove_theme_support('block-templates');

		/**
		 * Register the navigation menus.
		 *
		 * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
		 */
		register_nav_menus(
			[
			'primary_navigation' => __('Primary Navigation', 'sage'),
			'footer_navigation' => __('Footer Navigation', 'sage'),
			]
		);

		/**
		 * Disable the default block patterns.
		 *
		 * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
		 */
		remove_theme_support('core-block-patterns');

		/**
		 * Enable plugins to manage the document title.
		 *
		 * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
		 */
		add_theme_support('title-tag');

		/**
		 * Enable post thumbnail support.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		/**
		 * Enable responsive embed support.
		 *
		 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#responsive-embedded-content
		 */
		add_theme_support('responsive-embeds');

		/**
		 * Enable HTML5 markup support.
		 *
		 * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
		 */
		add_theme_support(
			'html5',
			[
			'caption',
			'comment-form',
			'comment-list',
			'gallery',
			'search-form',
			'script',
			'style',
			]
		);

		/**
		 * Enable selective refresh for widgets in customizer.
		 *
		 * @link https://developer.wordpress.org/reference/functions/add_theme_support/#customize-selective-refresh-widgets
		 */
		add_theme_support('customize-selective-refresh-widgets');

		/**
		 * Use main stylesheet for visual editor
		 * @see resources/assets/styles/layouts/_tinymce.scss
		 */
		add_editor_style(asset_path('styles/main.css'));
	},
	20
);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action(
	'widgets_init',
	function () {
		$config = [
		'before_widget' => '<section class="widget %1$s %2$s">',
		'after_widget' => '</section>',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
		];

		register_sidebar(
			[
			'name' => __('Primary', 'sage'),
			'id' => 'sidebar-primary',
			] + $config
		);

		register_sidebar(
			[
			'name' => __('Footer', 'sage'),
			'id' => 'sidebar-footer',
			] + $config
		);
	}
);
