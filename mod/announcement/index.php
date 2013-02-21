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
 * @copyright  2003 onwards Martin Dougiamas  {@link http://moodle.com}
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

<<<<<<< HEAD
require_once("../../config.php");
require_once("lib.php");
=======
/// Replace announcement with the name of your module and remove this line

require_once("../../config.php");
require_once("lib.php");

$id = required_param('id', PARAM_INT);   // course

/*$course = $DB->get_record('course', array('id' => $id), '*', MUST_EXIST);

require_course_login($course);

add_to_log($course->id, 'announcement', 'view all', 'index.php?id='.$course->id, '');

$coursecontext = get_context_instance(CONTEXT_COURSE, $course->id);
*/
$PAGE->set_url('/mod/announcement/index.php', array('id' => $id));
/*$PAGE->set_title(format_string($course->fullname));
$PAGE->set_heading(format_string($course->fullname));
$PAGE->set_context($coursecontext);

echo $OUTPUT->header();
>>>>>>> parent of bd5cf17... Revert "Updating announcement"

$id = required_param('id',PARAM_INT);   // course

$PAGE->set_url('/mod/announcement/index.php', array('id'=>$id));

redirect("$CFG->wwwroot/course/view.php?id=$id");


<<<<<<< HEAD
=======
echo $OUTPUT->heading(get_string('modulenameplural', 'announcement'), 2);
echo html_writer::table($table);
echo $OUTPUT->footer();
*/
redirect("$CFG->wwwroot/course/view.php?id=$id");
>>>>>>> parent of bd5cf17... Revert "Updating announcement"
