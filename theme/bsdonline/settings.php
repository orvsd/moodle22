<?php

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {

    // link color setting
    $name = 'theme_bsdonline/linkcolor';
    $title = get_string('linkcolor','theme_bsdonline');
    $description = get_string('linkcolordesc', 'theme_bsdonline');
    $default = '#2d83d5';
    $previewconfig = NULL;
    $setting = new admin_setting_configcolourpicker($name, $title, $description, $default, $previewconfig);
    $settings->add($setting);

    // Tag line setting
    $name = 'theme_bsdonline/tagline';
    $title = get_string('tagline','theme_bsdonline');
    $description = get_string('taglinedesc', 'theme_bsdonline');
    $setting = new admin_setting_configtext($name, $title, $description, '');
    $settings->add($setting);

    // Foot note setting
    $name = 'theme_bsdonline/footertext';
    $title = get_string('footertext','theme_bsdonline');
    $description = get_string('footertextdesc', 'theme_bsdonline');
    $setting = new admin_setting_confightmleditor($name, $title, $description, '');
    $settings->add($setting);

    // Custom CSS file
    $name = 'theme_bsdonline/customcss';
    $title = get_string('customcss','theme_bsdonline');
    $description = get_string('customcssdesc', 'theme_bsdonline');
    $setting = new admin_setting_configtextarea($name, $title, $description, '');
    $settings->add($setting);

}
