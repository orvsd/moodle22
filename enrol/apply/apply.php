<?php
require('../../config.php');
require_once('lib.php');

$site = get_site();
$systemcontext = get_context_instance(CONTEXT_SYSTEM);

$id         = required_param('id', PARAM_INT); // course id
$course = $DB->get_record('course', array('id'=>$id), '*', MUST_EXIST);
$context = get_context_instance(CONTEXT_COURSE, $course->id, MUST_EXIST);

require_login($course);
require_capability('moodle/course:enrolreview', $context);

$PAGE->set_url('/enrol/apply.php', array('id'=>$course->id));
//$PAGE->set_context($systemcontext);
$PAGE->set_pagelayout('admin');
$PAGE->set_heading($course->fullname);

$PAGE->navbar->add(get_string('confirmusers', 'enrol_apply'));
$PAGE->set_title("$site->shortname: ".get_string('confirmusers', 'enrol_apply'));

if($_POST['enrolid']){
	if($_POST['type']=='confirm'){
		confirmEnrolment($_POST['enrolid']);
	}elseif ($_POST['type']=='cancel'){
		cancelEnrolment($_POST['enrolid']);
	}
	redirect("$CFG->wwwroot/enrol/apply/apply.php?id=".$id."&enrolid=".$_GET['enrolid']);
}

$enrols = getAllEnrolment();

echo $OUTPUT->header();
echo $OUTPUT->heading(get_string('confirmusers', 'enrol_apply'));
echo '<form id="frmenrol" method="post" action="apply.php?id='.$id.'&enrolid='.$_GET['enrolid'].'">';
echo '<input type="hidden" id="type" name="type" value="confirm">';
echo '<table class="generalbox editcourse boxaligncenter"><tr class="header">';
echo '<th class="header" scope="col">&nbsp;</th>';
echo '<th class="header" scope="col">'.get_string('coursename', 'enrol_apply').'</th>';
echo '<th class="header" scope="col">'.get_string('applyuser', 'enrol_apply').'</th>';
echo '<th class="header" scope="col">'.get_string('applyusermail', 'enrol_apply').'</th>';
echo '<th class="header" scope="col">'.get_string('applydate', 'enrol_apply').'</th>';
echo '</tr>';
foreach ($enrols as $enrol){
	echo '<tr><td><input type="checkbox" name="enrolid[]" value="'.$enrol->id.'"></td>';
	echo '<td>'.$enrol->course.'</td>';
	echo '<td>'.$enrol->firstname.' '.$enrol->lastname.'</td>';
	echo '<td>'.$enrol->email.'</td>';
	echo '<td>'.date("Y-m-d",$enrol->timecreated).'</td></tr>';
}
echo '</table>';
echo '<p align="center"><input type="button" value="'.get_string('btnconfirm', 'enrol_apply').'" onclick="doSubmit(\'confrim\');">&nbsp;&nbsp;<input type="button" value="'.get_string('btncancel', 'enrol_apply').'" onclick="doSubmit(\'cancel\');"></p>';
echo '</form>';
echo '<script>function doSubmit(type){if(type=="cancel"){document.getElementById("type").value=type;}document.getElementById("frmenrol").submit();}</script>';
echo $OUTPUT->footer();