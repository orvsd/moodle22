<?php

// This file is part of Learn360 - http://www.learn360.com
//

/**
 * learnthreesixty module admin settings and defaults
 *
 * @package    mod
 * @subpackage learnthreesixty
 * @copyright  2012 http://www.Learn360.com 
 * @license    http://www.learn360.com
 */

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {   
    //--- general settings -----------------------------------------------------------------------------------
    $settings->add(new admin_setting_configtext('learnthreesixty/passkeycode',
        get_string('passkeycode', 'learnthreesixty'), get_string('configpasskeycode', 'learnthreesixty'), 'dArpNDmLkKhJz1hoLyn%2bKxxaTTJTFJK9ecDF7IWFZe8%3d', PARAM_RAW));
	
    $settings->add(new admin_setting_configtext('learnthreesixty/passthroughpath',
        get_string('passthroughpath', 'learnthreesixty'), get_string('configpassthroughpath', 'learnthreesixty'), 'http://www.learn360.com/Services/LiveText.aspx?', PARAM_RAW));

	//$passThroughPath 	= 'http://www.learn360.com/Services/LiveText.aspx?'; //Learn360 URL
    $settings->add(new admin_setting_configtext('learnthreesixty/location',
        get_string('location', 'learnthreesixty'), get_string('configlocation', 'learnthreesixty'), 'demo world', PARAM_RAW));

	$settings->add(new admin_setting_configtext('learnthreesixty/teacherrole',
        get_string('teacherrole', 'learnthreesixty'), get_string('configteacherrole', 'learnthreesixty'), 'Teacher', PARAM_TEXT));

	$settings->add(new admin_setting_configtext('learnthreesixty/studentrole',
        get_string('studentrole', 'learnthreesixty'), get_string('configstudentrole', 'learnthreesixty'), 'Teacher', PARAM_TEXT));

	$settings->add(new admin_setting_configtext('learnthreesixty/moodleurl',
        get_string('moodleurl', 'learnthreesixty'), get_string('configmoodleurl', 'learnthreesixty'), 'http://localhost:360/moodle', PARAM_RAW));

	$settings->add(new admin_setting_configtext('learnthreesixty/logo',
        get_string('logo', 'learnthreesixty'), get_string('configlogo', 'learnthreesixty'), 'moodle', PARAM_RAW));
	
}