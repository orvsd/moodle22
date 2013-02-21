<?php
defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {

    //--- general settings -----------------------------------------------------------------------------------
    $settings->add(new admin_setting_heading('enrol_apply_enrolname','',''));
    
    $settings->add(new admin_setting_configtext('enrol_apply/mailsubject','',get_string('confirmmailsubject', 'enrol_apply'),null,PARAM_TEXT,60));
    $settings->add(new admin_setting_heading('enrol_apply_settings', '', get_string('confirmmailcontent_desc', 'enrol_apply')));
    $settings->add(new admin_setting_confightmleditor('enrol_apply/confirmmailcontent', get_string('confirmmailcontent', 'enrol_apply'),'utf-8',''));
    
    $settings->add(new admin_setting_configtext('enrol_apply/mailcancelsubject','',get_string('cancelmailsubject', 'enrol_apply'),null,PARAM_TEXT,60));
    //$settings->add(new admin_setting_heading('enrol_apply_settings', '', get_string('cancelmailcontent_desc', 'enrol_apply')));
    $settings->add(new admin_setting_confightmleditor('enrol_apply/cancelmailcontent', get_string('cancelmailcontent', 'enrol_apply'),'utf-8',''));
    
//    $settings->add(new admin_setting_configtext('enrol_apply/mailaddress',get_string('mailaddress', 'enrol_apply')));
//    $settings->add(new admin_setting_configtext('enrol_apply/mailusername',get_string('mailusername', 'enrol_apply')));
//    $settings->add(new admin_setting_configtext('enrol_apply/mailpassword',get_string('mailpassword', 'enrol_apply')));
    
}
