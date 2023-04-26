<?php

namespace App;

/* Alter admin footer */
add_filter(
	'admin_footer_text',
	function () {
		echo '<span>Powered by <a href="http://www.wordpress.org" target="_blank">WordPress</a> | Bedrock and Sage 10 theme by <a href="https://roots.io/" target="_blank">Roots</a>, adapted and edited by <a href="https://github.com/yCodeTech" target="_blank">@yCodeTech</a></span> for usage with <a href="https://laravel-mix.com/" target="_blank">Laravel Mix</a>.';
	}
);
