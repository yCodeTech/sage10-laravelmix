<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

/**
 * Add default Lorum Ipsum content to new posts.
 * https://www.wpbeginner.com/wp-tutorials/how-to-add-default-content-in-your-wordpress-post-editor/
 */
add_filter('default_content', function ($content) {
	$content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis arcu odio, et facilisis nibh venenatis ut. Vestibulum viverra lacus vitae lacus gravida laoreet ac at purus.
	
	Maecenas arcu odio, suscipit id posuere vel, consequat eu orci. Nullam dictum placerat dolor, eu eleifend lacus ullamcorper ut.";
	
	return $content;
});
