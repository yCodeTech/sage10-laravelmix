<?php

namespace App;

/**
 * @param $asset
 * @return string
 */
function asset_path($asset) {
	return asset($asset)->uri();
}
