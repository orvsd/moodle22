<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Configuration for Moodle's standard theme.
 *
 * This theme is the default theme within Moodle 2.0, it builds upon the base theme
 * adding only CSS to create the simple look and feel Moodlers have come to recognise.
 *
 * For full information about creating Moodle themes, see:
 *  http://docs.moodle.org/dev/Themes_2.0
 *
 * @package   moodlecore
 * @copyright 2012 HSD
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$THEME->name = 'hillsboro';

////////////////////////////////////////////////////
// Name of the theme. Most likely the name of
// the directory in which this file resides.
////////////////////////////////////////////////////


$THEME->parents = array(
	'canvas',
	'base'
);

/////////////////////////////////////////////////////
// Which existing theme(s) in the /theme/ directory
// do you want this theme to extend. A theme can
// extend any number of themes. Rather than
// creating an entirely new theme and copying all
// of the CSS, you can simply create a new theme,
// extend the theme you like and just add the
// changes you want to your theme.
////////////////////////////////////////////////////


$THEME->sheets = array(
    'core',    /** Must come first**/
    'elements',
    'course',
    'landing'
);

////////////////////////////////////////////////////
// Name of the stylesheet(s) you've including in
// this theme's /styles/ directory.
////////////////////////////////////////////////////

$THEME->parents_exclude_sheets = array(
		// 'base'=>array(
		//	'pagelayout',
		// )
);


$THEME->enable_dock = false;

////////////////////////////////////////////////////
// Do you want to use the new navigation dock?
////////////////////////////////////////////////////


// $THEME->editor_sheets

////////////////////////////////////////////////////
// An array of stylesheets to include within the
// body of the editor.
////////////////////////////////////////////////////

$THEME->layouts = array(
    'base' => array(
        'file' => 'general.php',
        'regions' => array('side-post'),
        'defaultregion' => 'side-post',
    ),
    'standard' => array(
        'file' => 'general.php',
        'regions' => array('side-pre', 'side-post'),
        'defaultregion' => 'side-post',
    ),
    'course' => array(
        'file' => 'general.php',
        'regions' => array('side-post'),
        'defaultregion' => 'side-post'
    ),
    'coursecategory' => array(
        'file' => 'general.php',
        'regions' => array('side-post'),
        'defaultregion' => 'side-post',
    ),
    'incourse' => array(
        'file' => 'general.php',
        'regions' => array('side-post'),
        'defaultregion' => 'side-post',
    ),
    'frontpage' => array(
        'file' => 'frontpage.php',
        'regions' => array('side-pre', 'announce', 'side-post'),
        'defaultregion' => 'side-post',
    ),
    'admin' => array(
        'file' => 'general.php',
        'regions' => array('side-pre', 'side-post'),
        'defaultregion' => 'side-pre',
    ),
    'mydashboard' => array(
        'file' => 'general.php',
        'regions' => array('side-pre', 'side-post'),
        'defaultregion' => 'side-post',
        'options' => array('langmenu'=>true),
    ),
    'mypublic' => array(
        'file' => 'general.php',
        'regions' => array('side-post'),
        'defaultregion' => 'side-post',
    ),
    'login' => array(
        'file' => 'login.php',
        'regions' => array(),
        'options' => array('langmenu'=>true, 'nonavbar'=>true),
    ),
    'popup' => array(
        'file' => 'general.php',
        'regions' => array(),
        'options' => array('nofooter'=>true, 'noblocks'=>true, 'nonavbar'=>true, 'nocustommenu'=>true, 'noheading'=>true),
    ),
    'frametop' => array(
        'file' => 'general.php',
        'regions' => array(),
        'options' => array('nofooter'=>true),
    ),
    'maintenance' => array(
        'file' => 'general.php',
        'regions' => array(),
        'options' => array('nofooter'=>true, 'nonavbar'=>true, 'nocustommenu'=>true),
    ),
    'embedded' => array(
        'theme' => 'canvas',
        'file' => 'embedded.php',
        'regions' => array(),
        'options' => array('nofooter'=>true, 'nonavbar'=>true, 'nocustommenu'=>true),
    ),
    // Should display the content and basic headers only.
    'print' => array(
        'file' => 'general.php',
        'regions' => array(),
        'options' => array('nofooter'=>true, 'noblocks'=>true, 'nonavbar'=>false, 'nocustommenu'=>true),
    ),
    'report' => array(
        'file' => 'general.php',
        'regions' => array('side-pre'),
        'defaultregion' => 'side-pre',
    ),
);

///////////////////////////////////////////////////////////////
// These are all of the possible layouts in Moodle. The
// simplest way to do this is to keep the theme and file
// variables the same for every layout. Including them
// all in this way allows some flexibility down the road
// if you want to add a different layout template to a
// specific page.
///////////////////////////////////////////////////////////////

// $THEME->csspostprocess = 'hillsboroacademyonline_process_css';

////////////////////////////////////////////////////
// Allows the user to provide the name of a function
// that all CSS should be passed to before being
// delivered.
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Used to control the colours used in the small
// media player for the filters
////////////////////////////////////////////////////

$THEME->javascripts = array('jquery-1.8.0.min', 'jquery.watermark.min');

////////////////////////////////////////////////////
// An array containing the names of JavaScript files
// located in /javascript/ to include in the theme.
// (gets included in the head)
////////////////////////////////////////////////////

// $THEME->javascripts_footer
// $THEME->javascripts_footer

////////////////////////////////////////////////////
// As above but will be included in the page footer.
////////////////////////////////////////////////////

$THEME->larrow	= '&lang;';

////////////////////////////////////////////////////
// Overrides the left arrow image used throughout
// Moodle
////////////////////////////////////////////////////

$THEME->rarrow	= '&rang;';

////////////////////////////////////////////////////
// Overrides the right arrow image used throughout Moodle
////////////////////////////////////////////////////

// $THEME->layouts

////////////////////////////////////////////////////
// An array setting the layouts for the theme
////////////////////////////////////////////////////

// $THEME->parents_exclude_javascripts

////////////////////////////////////////////////////
// An array of JavaScript files NOT to inherit from
// the themes parents
////////////////////////////////////////////////////

// $THEME->parents_exclude_sheets

////////////////////////////////////////////////////
// An array of stylesheets not to inherit from the
// themes parents
////////////////////////////////////////////////////

// $THEME->plugins_exclude_sheets

////////////////////////////////////////////////////
// An array of plugin sheets to ignore and not
// include.
////////////////////////////////////////////////////

// $THEME->rendererfactory

////////////////////////////////////////////////////
// Sets a custom render factory to use with the
// theme, used when working with custom renderers.
////////////////////////////////////////////////////

$THEME->editor_sheets = array('editor');
