<?php

////////////////////////////////////////////////////////////////////////////////
/// This file contains a few configuration variables that control
/// how Moodle uses this theme.
////////////////////////////////////////////////////////////////////////////////

$THEME->name = 'computerskills_two';

$THEME->sheets = array('computerskills_two');
/// This variable is an array containing the names of all the
/// stylesheet files you want included in this theme, and in what order
////////////////////////////////////////////////////////////////////////////////

$THEME->parents = array('skonline', 'base');  // TODO: new themes can not be based on standardold, instead use 'base' as the base
/// This variable can be set to the name of a parent theme
/// which you want to have included before the current theme.
/// This can make it easy to make modifications to another
/// theme without having to actually change the files
/// If this variable is empty or false then a parent theme
/// is not used.
////////////////////////////////////////////////////////////////////////////////

$THEME->parents_exclude_sheets = array('base'=>array('styles_moz'));

$THEME->resource_mp3player_colors =
 'bgColour=000000&btnColour=ffffff&btnBorderColour=cccccc&iconColour=000000&'.
 'iconOverColour=00cc00&trackColour=cccccc&handleColour=ffffff&loaderColour=ffffff&'.
 'font=Arial&fontColour=3333FF&buffer=10&waitForPlay=no&autoPlay=yes';
/// With this you can control the colours of the "big" MP3 player
/// that is used for MP3 resources.


$THEME->filter_mediaplugin_colors =
 'bgColour=000000&btnColour=ffffff&btnBorderColour=cccccc&iconColour=000000&'.
 'iconOverColour=00cc00&trackColour=cccccc&handleColour=ffffff&loaderColour=ffffff&'.
 'waitForPlay=yes';
/// ...And this controls the small embedded player



$THEME->rendererfactory = 'theme_overridden_renderer_factory';
$THEME->enable_dock = true;
//$THEME->javascripts_footer = array('navigation');
$THEME->javascripts = array('skonline' => array(
		'p7TMMscripts', 'p7tmscripts', 'SpryTabbedPanels', 'SpryCollapsiblePanel', 'skonline', 'navigation'	));
$THEME->editor_sheets = array('editor');