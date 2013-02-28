<?php

// This file is part of Learn360 module for Moodle 2.0

/**
 * Library of interface functions and constants for module learnthreesixty
 *
 * All the core Moodle functions, neeeded to allow the module to work
 * integrated in Moodle should be placed here.
 * All the learnthreesixty specific functions, needed to implement all the module
 * logic, should go to locallib.php. This will help to save some memory when
 * Moodle is performing actions across all modules.
 *
 * @package    mod
 * @subpackage learnthreesixty
 * @copyright  2012 http://www.Learn360.com
 * @license    http://www.Learn360.com/userterms.aspx
 * @Author	Nitesh Sanghvi
 */

defined('MOODLE_INTERNAL') || die();


////////////////////////////////////////////////////////////////////////////////
// Moodle core API                                                            //
////////////////////////////////////////////////////////////////////////////////

/**
 * Returns the information on whether the module supports a feature
 *
 * @see plugin_supports() in lib/moodlelib.php
 * @param string $feature FEATURE_xx constant for requested feature
 * @return mixed true if the feature is supported, null if unknown
 */
function learnthreesixty_supports($feature) {
    switch($feature) {
		case FEATURE_MOD_ARCHETYPE:     return MOD_ARCHETYPE_RESOURCE;
        case FEATURE_MOD_INTRO:         return false;
        default:                        return null;
    }
}

/**
 * Saves a new instance of the learnthreesixty into the database
 *
 * Given an object containing all the necessary data,
 * (defined by the form in mod_form.php) this function
 * will create a new instance and return the id number
 * of the new instance.
 *
 * @param object $learnthreesixty An object from the form in mod_form.php
 * @param mod_learnthreesixty_mod_form $mform
 * @return int The id of the newly inserted learnthreesixty record
 */
function learnthreesixty_add_instance(stdClass $learnthreesixty, mod_learnthreesixty_mod_form $mform = null) {
    global $DB;

    $learnthreesixty->timecreated = time();

    # You may have to add extra stuff in here #

    return $DB->insert_record('learnthreesixty', $learnthreesixty);
}

/**
 * Updates an instance of the learnthreesixty in the database
 *
 * Given an object containing all the necessary data,
 * (defined by the form in mod_form.php) this function
 * will update an existing instance with new data.
 *
 * @param object $learnthreesixty An object from the form in mod_form.php
 * @param mod_learnthreesixty_mod_form $mform
 * @return boolean Success/Fail
 */
function learnthreesixty_update_instance(stdClass $learnthreesixty, mod_learnthreesixty_mod_form $mform = null) {
    global $DB;

    $learnthreesixty->timemodified = time();
    $learnthreesixty->id = $learnthreesixty->instance;

    # You may have to add extra stuff in here #

    return $DB->update_record('learnthreesixty', $learnthreesixty);
}

/**
 * Removes an instance of the learnthreesixty from the database
 *
 * Given an ID of an instance of this module,
 * this function will permanently delete the instance
 * and any data that depends on it.
 *
 * @param int $id Id of the module instance
 * @return boolean Success/Failure
 */
function learnthreesixty_delete_instance($id) {
    global $DB;

    if (! $learnthreesixty = $DB->get_record('learnthreesixty', array('id' => $id))) {
        return false;
    }

    # Delete any dependent records here #

    $DB->delete_records('learnthreesixty', array('id' => $learnthreesixty->id));

    return true;
}

/**
 * Returns a small object with summary information about what a
 * user has done with a given particular instance of this module
 * Used for user activity reports.
 * $return->time = the time they did it
 * $return->info = a short text description
 *
 * @return stdClass|null
 */
function learnthreesixty_user_outline($course, $user, $mod, $learnthreesixty) {

    $return = new stdClass();
    $return->time = 0;
    $return->info = '';
    return $return;
}

/**
 * Prints a detailed representation of what a user has done with
 * a given particular instance of this module, for user activity reports.
 *
 * @param stdClass $course the current course record
 * @param stdClass $user the record of the user we are generating report for
 * @param cm_info $mod course module info
 * @param stdClass $learnthreesixty the module instance record
 * @return void, is supposed to echp directly
 */
function learnthreesixty_user_complete($course, $user, $mod, $learnthreesixty) {
}

/**
 * Given a course and a time, this module should find recent activity
 * that has occurred in learnthreesixty activities and print it out.
 * Return true if there was output, or false is there was none.
 *
 * @return boolean
 */
function learnthreesixty_print_recent_activity($course, $viewfullnames, $timestart) {
    return false;  //  True if anything was printed, otherwise false
}

/**
 * Prepares the recent activity data
 *
 * This callback function is supposed to populate the passed array with
 * custom activity records. These records are then rendered into HTML via
 * {@link learnthreesixty_print_recent_mod_activity()}.
 *
 * @param array $activities sequentially indexed array of objects with the 'cmid' property
 * @param int $index the index in the $activities to use for the next record
 * @param int $timestart append activity since this time
 * @param int $courseid the id of the course we produce the report for
 * @param int $cmid course module id
 * @param int $userid check for a particular user's activity only, defaults to 0 (all users)
 * @param int $groupid check for a particular group's activity only, defaults to 0 (all groups)
 * @return void adds items into $activities and increases $index
 */
function learnthreesixty_get_recent_mod_activity(&$activities, &$index, $timestart, $courseid, $cmid, $userid=0, $groupid=0) {
}

/**
 * Prints single activity item prepared by {@see learnthreesixty_get_recent_mod_activity()}

 * @return void
 */
function learnthreesixty_print_recent_mod_activity($activity, $courseid, $detail, $modnames, $viewfullnames) {
}

/**
 * Function to be run periodically according to the moodle cron
 * This function searches for things that need to be done, such
 * as sending out mail, toggling flags etc ...
 *
 * @return boolean
 * @todo Finish documenting this function
 **/
function learnthreesixty_cron () {
    return true;
}

/**
 * Returns an array of users who are participanting in this learnthreesixty
 *
 * Must return an array of users who are participants for a given instance
 * of learnthreesixty. Must include every user involved in the instance,
 * independient of his role (student, teacher, admin...). The returned
 * objects must contain at least id property.
 * See other modules as example.
 *
 * @param int $learnthreesixtyid ID of an instance of this module
 * @return boolean|array false if no participants, array of objects otherwise
 */
function learnthreesixty_get_participants($learnthreesixtyid) {
    return false;
}

/**
 * Returns all other caps used in the module
 *
 * @example return array('moodle/site:accessallgroups');
 * @return array
 */
function learnthreesixty_get_extra_capabilities() {
    return array();
}

////////////////////////////////////////////////////////////////////////////////
// Gradebook API                                                              //
////////////////////////////////////////////////////////////////////////////////

/**
 * Is a given scale used by the instance of learnthreesixty?
 *
 * This function returns if a scale is being used by one learnthreesixty
 * if it has support for grading and scales. Commented code should be
 * modified if necessary. See forum, glossary or journal modules
 * as reference.
 *
 * @param int $learnthreesixtyid ID of an instance of this module
 * @return bool true if the scale is used by the given learnthreesixty instance
 */
function learnthreesixty_scale_used($learnthreesixtyid, $scaleid) {
    global $DB;

    /** @example */
    if ($scaleid and $DB->record_exists('learnthreesixty', array('id' => $learnthreesixtyid, 'grade' => -$scaleid))) {
        return true;
    } else {
        return false;
    }
}

/**
 * Checks if scale is being used by any instance of learnthreesixty.
 *
 * This is used to find out if scale used anywhere.
 *
 * @param $scaleid int
 * @return boolean true if the scale is used by any learnthreesixty instance
 */
function learnthreesixty_scale_used_anywhere($scaleid) {
    global $DB;

    /** @example */
    if ($scaleid and $DB->record_exists('learnthreesixty', array('grade' => -$scaleid))) {
        return true;
    } else {
        return false;
    }
}

/**
 * Creates or updates grade item for the give learnthreesixty instance
 *
 * Needed by grade_update_mod_grades() in lib/gradelib.php
 *
 * @param stdClass $learnthreesixty instance object with extra cmidnumber and modname property
 * @return void
 */
function learnthreesixty_grade_item_update(stdClass $learnthreesixty) {
    global $CFG;
    require_once($CFG->libdir.'/gradelib.php');

    /** @example */
    $item = array();
    $item['itemname'] = clean_param($learnthreesixty->name, PARAM_NOTAGS);
    $item['gradetype'] = GRADE_TYPE_VALUE;
    $item['grademax']  = $learnthreesixty->grade;
    $item['grademin']  = 0;

    grade_update('mod/learnthreesixty', $learnthreesixty->course, 'mod', 'learnthreesixty', $learnthreesixty->id, 0, null, $item);
}

/**
 * Update learnthreesixty grades in the gradebook
 *
 * Needed by grade_update_mod_grades() in lib/gradelib.php
 *
 * @param stdClass $learnthreesixty instance object with extra cmidnumber and modname property
 * @param int $userid update grade of specific user only, 0 means all participants
 * @return void
 */
function learnthreesixty_update_grades(stdClass $learnthreesixty, $userid = 0) {
    global $CFG, $DB;
    require_once($CFG->libdir.'/gradelib.php');

    /** @example */
    $grades = array(); // populate array of grade objects indexed by userid

    grade_update('mod/learnthreesixty', $learnthreesixty->course, 'mod', 'learnthreesixty', $learnthreesixty->id, 0, $grades);
}

////////////////////////////////////////////////////////////////////////////////
// File API                                                                   //
////////////////////////////////////////////////////////////////////////////////

/**
 * Returns the lists of all browsable file areas within the given module context
 *
 * The file area 'intro' for the activity introduction field is added automatically
 * by {@link file_browser::get_file_info_context_module()}
 *
 * @param stdClass $course
 * @param stdClass $cm
 * @param stdClass $context
 * @return array of [(string)filearea] => (string)description
 */
function learnthreesixty_get_file_areas($course, $cm, $context) {
    return array();
}

/**
 * Serves the files from the learnthreesixty file areas
 *
 * @param stdClass $course
 * @param stdClass $cm
 * @param stdClass $context
 * @param string $filearea
 * @param array $args
 * @param bool $forcedownload
 * @return void this should never return to the caller
 */
function learnthreesixty_pluginfile($course, $cm, $context, $filearea, array $args, $forcedownload) {
    global $DB, $CFG;

    if ($context->contextlevel != CONTEXT_MODULE) {
        send_file_not_found();
    }

    require_login($course, true, $cm);

    send_file_not_found();
}

////////////////////////////////////////////////////////////////////////////////
// Navigation API                                                             //
////////////////////////////////////////////////////////////////////////////////

/**
 * Extends the global navigation tree by adding learnthreesixty nodes if there is a relevant content
 *
 * This can be called by an AJAX request so do not rely on $PAGE as it might not be set up properly.
 *
 * @param navigation_node $navref An object representing the navigation tree node of the learnthreesixty module instance
 * @param stdClass $course
 * @param stdClass $module
 * @param cm_info $cm
 */
function learnthreesixty_extend_navigation(navigation_node $navref, stdclass $course, stdclass $module, cm_info $cm) {
}

/**
 * Extends the settings navigation with the learnthreesixty settings
 *
 * This function is called when the context for the page is a learnthreesixty module. This is not called by AJAX
 * so it is safe to rely on the $PAGE.
 *
 * @param settings_navigation $settingsnav {@link settings_navigation}
 * @param navigation_node $learnthreesixtynode {@link navigation_node}
 */
function learnthreesixty_extend_settings_navigation(settings_navigation $settingsnav, navigation_node $learnthreesixtynode=null) {
}
