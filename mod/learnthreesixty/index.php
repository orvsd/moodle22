<?php

/**
 * Used to list the instances of learn three sixty resources
 *
 *
 * @package    mod
 * @subpackage learnthreesixty
 * @copyright  2012 http://www.Learn360.com
 * @license    http://www.Learn360.com/userterms.aspx
 * @Author Nitesh Sanghvi
 */

require_once(dirname(dirname(dirname(__FILE__))).'/config.php');
require_once(dirname(__FILE__).'/lib.php');

$id = required_param('id', PARAM_INT);   // course

$course = $DB->get_record('course', array('id' => $id), '*', MUST_EXIST);

require_course_login($course);

add_to_log($course->id, 'learnthreesixty', 'view all', 'index.php?id='.$course->id, '');

$coursecontext = get_context_instance(CONTEXT_COURSE, $course->id);

$PAGE->set_url('/mod/learnthreesixty/index.php', array('id' => $id));
$PAGE->set_title(format_string($course->fullname));
$PAGE->set_heading(format_string($course->fullname));
$PAGE->set_context($coursecontext);

echo $OUTPUT->header();

if (! $learnthreesixtys = get_all_instances_in_course('learnthreesixty', $course)) {
    notice(get_string('nolearnthreesixtys', 'learnthreesixty'), new moodle_url('/course/view.php', array('id' => $course->id)));
}

if ($course->format == 'weeks') {
    $table->head  = array(get_string('week'), get_string('name'));
    $table->align = array('center', 'left');
} else if ($course->format == 'topics') {
    $table->head  = array(get_string('topic'), get_string('name'));
    $table->align = array('center', 'left', 'left', 'left');
} else {
    $table->head  = array(get_string('name'));
    $table->align = array('left', 'left', 'left');
}

foreach ($learnthreesixtys as $learnthreesixty) {
    if (!$learnthreesixty->visible) {
        $link = html_writer::link(
            new moodle_url('/mod/learnthreesixty.php', array('id' => $learnthreesixty->coursemodule)),
            format_string($learnthreesixty->name, true),
            array('class' => 'dimmed'));
    } else {
        $link = html_writer::link(
            new moodle_url('/mod/learnthreesixty.php', array('id' => $learnthreesixty->coursemodule)),
            format_string($learnthreesixty->name, true));
    }

    if ($course->format == 'weeks' or $course->format == 'topics') {
        $table->data[] = array($learnthreesixty->section, $link);
    } else {
        $table->data[] = array($link);
    }
}

echo $OUTPUT->heading(get_string('modulenameplural', 'learnthreesixty'), 2);
echo html_writer::table($table);
echo $OUTPUT->footer();
