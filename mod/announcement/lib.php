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
 * Library of functions and constants for module announcement
 *
 * @package    mod
 * @subpackage announcement
 * @copyright  1999 onwards Martin Dougiamas  {@link http://moodle.com}
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

/** ANNOUNCEMENT_MAX_NAME_LENGTH = 50 */
define("ANNOUNCEMENT_MAX_NAME_LENGTH", 50);

/**
 * @uses ANNOUNCEMENT_MAX_NAME_LENGTH
 * @param object $announcement
 * @return string
 */
function get_announcement_name($announcement) {
    $textlib = textlib_get_instance();

    $name = strip_tags(format_string($announcement->intro,true));
    if ($textlib->strlen($name) > ANNOUNCEMENT_MAX_NAME_LENGTH) {
        $name = $textlib->substr($name, 0, ANNOUNCEMENT_MAX_NAME_LENGTH)."...";
    }

    if (empty($name)) {
        // arbitrary name
        $name = get_string('modulename','announcement');
    }

    return $name;
}
/**
 * Given an object containing all the necessary data,
 * (defined by the form in mod_form.php) this function
 * will create a new instance and return the id number
 * of the new instance.
 *
 * @global object
 * @param object $announcement
 * @return bool|int
 */
function announcement_add_instance($announcement) {
    global $DB;

    $announcement->name = get_announcement_name($announcement);
    $announcement->timecreated = time();

    return $DB->insert_record("announcement", $announcement);
}

/**
 * Given an object containing all the necessary data,
 * (defined by the form in mod_form.php) this function
 * will update an existing instance with new data.
 *
 * @global object
 * @param object $announcement
 * @return bool
 */
function announcement_update_instance($announcement) {
    global $DB;

    $announcement->name = get_announcement_name($announcement);
    $announcement->timemodified = time();
    $announcement->id = $announcement->instance;

    return $DB->update_record("announcement", $announcement);
}

/**
 * Given an ID of an instance of this module,
 * this function will permanently delete the instance
 * and any data that depends on it.
 *
 * @global object
 * @param int $id
 * @return bool
 */
function announcement_delete_instance($id) {
    global $DB;

    if (! $announcement = $DB->get_record("announcement", array("id"=>$id))) {
        return false;
    }

    $result = true;

    if (! $DB->delete_records("announcement", array("id"=>$announcement->id))) {
        $result = false;
    }

    return $result;
}

/**
 * Returns the users with data in one resource
 * (NONE, but must exist on EVERY mod !!)
 *
 * @todo: deprecated - to be deleted in 2.2
 *
 * @param int $announcementid
 */
function announcement_get_participants($announcementid) {

    return false;
}

/**
 * Given a course_module object, this function returns any
 * "extra" information that may be needed when printing
 * this activity in a course listing.
 * See get_array_of_activities() in course/lib.php
 *
 * @global object
 * @param object $coursemodule
 * @return object|null
 */
/*function announcement_get_coursemodule_info($coursemodule) {
    global $DB;

    if ($announcement = $DB->get_record('announcement', array('id'=>$coursemodule->instance), 'id, name, intro, introformat')) {
        if (empty($announcement->name)) {
            // announcement name missing, fix it
            $announcement->name = "announcement{$announcement->id}";
            $DB->set_field('announcement', 'name', $announcement->name, array('id'=>$announcement->id));
        }
        $info = new stdClass();
        // no filtering hre because this info is cached and filtered later
        $info->extra = format_module_intro('announcement', $announcement, $coursemodule->id, false);
        $info->name  = $announcement->name;
        return $info;
    } else {
        return null;
    }
}*/
//This replaces the above function
function announcement_cm_info_view(cm_info $cm) {
 global $DB;
 if ($announcement = $DB->get_record('announcement', array('id' => $cm->instance))) {
 $content = format_text($announcement->intro, $announcement->introformat);
 $content = file_rewrite_pluginfile_urls($content, 'pluginfile.php', $cm->context->id, 'mod_announcement', 'intro', null);
 $cm->set_content($content);
 }
}


/**
 * @return array
 */
function announcement_get_view_actions() {
    return array();
}

/**
 * @return array
 */
function announcement_get_post_actions() {
    return array();
}

/**
 * This function is used by the reset_course_userdata function in moodlelib.
 *
 * @param object $data the data submitted from the reset course.
 * @return array status array
 */
function announcement_reset_userdata($data) {
    return array();
}

/**
 * Returns all other caps used in module
 *
 * @return array
 */
function announcement_get_extra_capabilities() {
    return array('moodle/site:accessallgroups');
}

/**
 * @uses FEATURE_IDNUMBER
 * @uses FEATURE_GROUPS
 * @uses FEATURE_GROUPINGS
 * @uses FEATURE_GROUPMEMBERSONLY
 * @uses FEATURE_MOD_INTRO
 * @uses FEATURE_COMPLETION_TRACKS_VIEWS
 * @uses FEATURE_GRADE_HAS_GRADE
 * @uses FEATURE_GRADE_OUTCOMES
 * @param string $feature FEATURE_xx constant for requested feature
 * @return bool|null True if module supports feature, false if not, null if doesn't know
 */
function announcement_supports($feature) {
    switch($feature) {
        case FEATURE_IDNUMBER:                return false;
        case FEATURE_GROUPS:                  return false;
        case FEATURE_GROUPINGS:               return false;
        case FEATURE_GROUPMEMBERSONLY:        return true;
        case FEATURE_MOD_INTRO:               return true;
        case FEATURE_COMPLETION_TRACKS_VIEWS: return false;
        case FEATURE_GRADE_HAS_GRADE:         return false;
        case FEATURE_GRADE_OUTCOMES:          return false;
        case FEATURE_MOD_ARCHETYPE:           return MOD_ARCHETYPE_RESOURCE;
        case FEATURE_BACKUP_MOODLE2:          return true;
        case FEATURE_NO_VIEW_LINK:            return true;

        default: return null;
    }
}

