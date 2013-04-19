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
 * parent report
 *
 * @TODO - use a template instead of hard-coded html
 * @TODO - convert to using strings in the lang file
 * 
 * @package    report
 * @subpackage parent
 * @copyright  2012 Kenneth Lett (kennric@osuosl.org)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

global $CFG, $DB, $USER, $PAGE, $OUTPUT;

require_once('../../config.php');
require_once($CFG->dirroot.'/report/parent/lib.php');
require_once($CFG->dirroot.'/blocks/moodleblock.class.php');
require_once($CFG->dirroot.'/blocks/progress/block_progress.php');
require_once($CFG->libdir.'/adminlib.php');
require_once($CFG->libdir.'/tablelib.php');

$context = context_system::instance();

// access control
require_login();
require_capability('report/parent:view', $context);

// set up the page
$title = "Parental Progress Report"; 
$PAGE->requires->css('/blocks/progress/styles.css');
$PAGE->requires->css('/report/parent/styles.css');
$PAGE->requires->css('/report/parent/printstyles.css');
$PAGE->requires->js_init_call('M.report_parent.init');
$PAGE->set_context($context);
$PAGE->set_title($title);
$PAGE->set_heading($title);
$PAGE->navbar->add($title);
$PAGE->set_pagelayout('report');
$PAGE->set_url('/report/parent/index.php', array());

admin_externalpage_setup('reportparent', '', null, '', array('pagelayout'=>'report'));

$grade_table_header = array(array("Course Name", 
                                  "Assignment or Assessment Name",
                                  "Student Score",
                                  "Total score possible"),
                                  ); 

// get the form selector data
$selectors = report_parent_form_selectors();

// get the URL params from the form
$view = optional_param('view', false, PARAM_INT);
$studentid = optional_param('studentid', false, PARAM_INT);
$schoolid = optional_param('schoolid', false, PARAM_INT);
$courseids = optional_param_array('courseids', false, PARAM_INT);

if (!$courseids) {
    $courseids = array();
}

if ($schoolid) {
    $schoolname = $selectors['school'][$schoolid];
} else {
    $schoolname = false;
    $schoolid = "";
}

// start page output
echo $OUTPUT->header();
echo $OUTPUT->heading($title, 2);

// show the filter form
echo report_parent_render_form($selectors, $courseids, $studentid, $schoolid);

if($view) {
    // get all the students based on our filter criteria
    $students = report_parent_get_students($studentid, $courseids, $schoolname);
    foreach($students as $student) {
        generate_report($student,$grade_table_header,$courseid);
    }
}

// end page output
echo $OUTPUT->footer();

/**
 * Generate a report for a specific student
 * @TODO - this function echoes HTML due to the fact that the 
 * progress bar function echoes rather than returning a string
 * eventually this should be fixed and this function should
 * return a string
 *
 */ 
function generate_report($student,$grade_table_header, $courseid) {
    global $DB, $OUTPUT, $PAGE;
    $studentid = $student->id;
    $courses = array();
    if($courseid) {
        $courses[] = $DB->get_record('course', array('id'=>$courseid));
    } else {
        $courses = enrol_get_users_courses($studentid);
    }

    $student_header = report_parent_render_header($student);
    $student_footer = report_parent_render_footer($student);
    $header_printed = false;
 
    if(!empty($courses)) {
        echo $OUTPUT->container_start('report_parent');
        echo $student_header;
        foreach($courses as $course) {
            $grade_table = array();
            $courses_noprogress = array();
            $data = report_parent_get_data($student->id, $course->id);

            if ($data) {
                if (!defined($grade_table['head'])) {
                    $grade_table['head'] = $grade_table_header;
                }
                $grade_table['data'] = $data; 
                $table = report_parent_render_table($grade_table);
            } else {
                $courses_noprogress[] = $course->shortname;
            }

            if (!empty($grade_table['data'])) {
                if (!$header_printed) {
                    $output .= $student_header;
                    $header_printed = true;
                }
                echo $table;
                echo '<div class="block_progress parentProgressBar" style="width: 600px;">';
                report_parent_render_progress($course, $student);
                echo '</div>';
            }
        }
        if(!empty($courses_noprogress)) {
            echo '<p><span class="strong">Grade data was not found for the following courses:</span>';
            echo "<ul>";
            foreach($courses_noprogress as $course) {
                echo "<li>" . $course . "</li>";
            }
            echo '</p>';
        }
        echo $student_footer;
        echo $OUTPUT->container_end();
    }
    return true;
}

