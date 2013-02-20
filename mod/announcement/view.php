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
 * Prints a particular instance of announcement
 *
 * You can have a rather longer description of the file as well,
 * if you like, and it can span multiple lines.
 *
 * @package    mod
 * @subpackage announcement
 * @copyright  2011 Your Name
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/// (Replace announcement with the name of your module and remove this line)

require_once("../../config.php");


$id = optional_param('id', 0, PARAM_INT); // course_module ID, or
$n  = optional_param('a', 0, PARAM_INT);  // announcement instance ID - it should be named as the first character of the module

if ($id) {
    $PAGE->set_url('/mod/announcement/index.php', array('id'=>$id));
    if (! $cm = get_coursemodule_from_id('announcement', $id)) {
        print_error('invalidcoursemodule');
    }

    if (! $course = $DB->get_record("course", array("id"=>$cm->course))) {
        print_error('coursemisconf');
    }

    if (! $announcement = $DB->get_record("announcement", array("id"=>$cm->instance))) {
        print_error('invalidcoursemodule');
    }

} else {
    $PAGE->set_url('/mod/announcement/index.php', array('l'=>$l));
    if (! $announcement = $DB->get_record("announcement", array("id"=>$l))) {
        print_error('invalidcoursemodule');
    }
    if (! $course = $DB->get_record("course", array("id"=>$announcement->course)) ){
        print_error('coursemisconf');
    }
    if (! $cm = get_coursemodule_from_instance("announcement", $announcement->id, $course->id)) {
        print_error('invalidcoursemodule');
    }
}

require_login($course, true, $cm);

redirect("$CFG->wwwroot/course/view.php?id=$course->id");