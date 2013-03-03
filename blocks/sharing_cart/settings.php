<?php  //$Id: settings.php 540 2011-11-18 05:56:24Z malu $

$settings->add(
	new admin_setting_heading(
		'sharing_cart_heading',
		get_string('conf_plugins_heading', 'block_sharing_cart'),
		get_string('conf_plugins_nothing', 'block_sharing_cart')
	)
);
