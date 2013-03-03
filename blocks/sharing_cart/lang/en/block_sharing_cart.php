<?php

$string['pluginname'] = 'Sharing Cart';

$string['backup'] = 'Copy to Sharing Cart';
$string['restore'] = 'Copy to course';
$string['movedir'] = 'Move into folder';
$string['copyhere'] = 'Copy here';
$string['notarget'] = 'Target not found';
$string['clipboard'] = 'Copying this shared item';
$string['bulkdelete'] = 'Bulk delete';
$string['confirm_backup'] = 'Are you sure you want to copy to Sharing Cart?';
$string['confirm_restore'] = 'Are you sure you want to copy to course?';
$string['confirm_delete'] = 'Are you sure you want to delete?';
$string['confirm_delete_selected'] = 'Are you sure you want to delete all selected items?';
$string['download'] = 'Download';

$string['conf_plugins_heading'] = 'Plugin settings';
$string['conf_plugins_nothing'] = 'There\'s no plugins to configure.';
$string['conf_plugins_enabled_head'] = 'Enabled plugins';
$string['conf_plugins_enabled_desc'] = 'Select plugins you want to use. Click with CTRL to select multiple item.';

$string['err:record_id'] = 'Shared item ID was incorrect (not found)';
$string['err:course_id'] = 'Course ID was incorrect (not found)';
$string['err:section_id'] = 'Section ID was incorrect (not found)';
$string['err:module_id'] = 'Module ID was incorrect (not found)';
$string['err:capability'] = 'You don\'t have any permissions to access this shared item';
$string['err:backup'] = 'An error occurred while backing up';
$string['err:restore'] = 'An error occurred while restoring';
$string['err:move'] = 'An error occurred while moving shared item';
$string['err:delete'] = 'An error occurred while deleting shared item';
$string['err:record'] = 'An error occurred while operating data record';
$string['err:tempdir'] = 'An error occurred while creating temporary directory';
$string['err:cleanup'] = 'An error occurred while cleaning up temporary data';

$string['err:not_implemented'] = 'Specified module does not support backup function';

$string['sharing_cart'] = $string['pluginname'];
$string['sharing_cart_help'] = file_get_contents(__DIR__.'/help/sharing_cart.html');
