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
 * Links and settings
 *
 * @package    report
 * @subpackage loglive
 * @copyright  2011 Petr Skoda
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

// just a link to course report
$ADMIN->add('reports', new admin_externalpage('reportparent', get_string('pluginname',   'report_parent'), "$CFG->wwwroot/report/parent/index.php", 'report/parent:view'));

// no report settings
$settings = new admin_settingpage('parent_report_settings', "Parent Report Settings");

$settings->add(
    new admin_setting_configtext('parent_report_settings/preamble_text',
                                 'Preamble Text',
                                 'Text to appear before the student name',
                                 'To the parents of',
                                 PARAM_TEXT));

$settings->add(
    new admin_setting_configtextarea('parent_report_settings/header_text',
                                 'Header Text',
                                 'Text to appear at the beginning of the progress report',
                                 '',
                                 PARAM_TEXT));

$settings->add(
    new admin_setting_configtextarea('parent_report_settings/footer_text',
                                 'Footer Text',
                                 'Text to appear at the bottom of the progress report',
                                 '',
                                 PARAM_TEXT));

$ADMIN->add('reports', $settings);
