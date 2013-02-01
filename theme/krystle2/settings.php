<?php

/**
 * Settings for the krystle2 theme
 */

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {

    // Hide Settings block
    $name = 'theme_krystle2/hidesettingsblock';
    $title = get_string('hidesettingsblock','theme_krystle2');
    $description = get_string('hidesettingsblockdesc', 'theme_krystle2');
    $default = 1;
    $choices = array(1=>'Yes', 0=>'No');
    $setting = new admin_setting_configselect($name, $title, $description, $default, $choices);
    $settings->add($setting);

    // Hide Navigation block
    $name = 'theme_krystle2/hidenavigationblock';
    $title = get_string('hidenavigationblock','theme_krystle2');
    $description = get_string('hidenavigationblockdesc', 'theme_krystle2');
    $default = 0;
    $choices = array(1=>'Yes', 0=>'No');
    $setting = new admin_setting_configselect($name, $title, $description, $default, $choices);
    $settings->add($setting);
}
