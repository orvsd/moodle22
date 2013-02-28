<?php

/**
 * Prints a particular instance of learnthreesixty
 *
 * You can have a rather longer description of the file as well,
 * if you like, and it can span multiple lines.
 *
 * @package    mod
 * @subpackage learnthreesixty
 * @copyright  2012 http://www.Learn360.com
 * @license    http://www.learn360.com/userterms.aspx
 * @Author		Nitesh Sanghvi
 */


require_once(dirname(dirname(dirname(__FILE__))).'/config.php');
require_once(dirname(__FILE__).'/lib.php');

$id = optional_param('id', 0, PARAM_INT); // course_module ID, or
$n  = optional_param('n', 0, PARAM_INT);  // learnthreesixty instance ID - it should be named as the first character of the module

if ($id) {
    $cm         = get_coursemodule_from_id('learnthreesixty', $id, 0, false, MUST_EXIST);
    $course     = $DB->get_record('course', array('id' => $cm->course), '*', MUST_EXIST);
    $learnthreesixty  = $DB->get_record('learnthreesixty', array('id' => $cm->instance), '*', MUST_EXIST);
} elseif ($n) {
    $learnthreesixty  = $DB->get_record('learnthreesixty', array('id' => $n), '*', MUST_EXIST);
    $course     = $DB->get_record('course', array('id' => $learnthreesixty->course), '*', MUST_EXIST);
    $cm         = get_coursemodule_from_instance('learnthreesixty', $learnthreesixty->id, $course->id, false, MUST_EXIST);
} else {
    error('You must specify a course_module ID or an instance ID');
}

require_login($course, true, $cm);
$context = get_context_instance(CONTEXT_MODULE, $cm->id);

add_to_log($course->id, 'learnthreesixty', 'view', "view.php?id={$cm->id}", $learnthreesixty->name, $cm->id);

/// Print the page header
global $USER;
$PAGE->set_url('/mod/learnthreesixty/view.php', array('id' => $cm->id));
$PAGE->set_title(format_string($learnthreesixty->name));
$PAGE->set_heading(format_string($course->fullname));
$PAGE->set_context($context);

// other things you may want to set - remove if not needed
//$PAGE->set_cacheable(false);
//$PAGE->set_focuscontrol('some-html-id');
//$PAGE->add_body_class('learnthreesixty-'.$somevar);

// Output starts here
echo $OUTPUT->header();

//if ($learnthreesixty->intro) { // Conditions to show the intro can change to look for own settings or whatever
//    echo $OUTPUT->box(format_module_intro('learnthreesixty', $learnthreesixty, $cm->id), 'generalbox mod_introbox', 'learnthreesixtyintro');
//}
$PAGE->requires->js_init_call('M.mod_learnthreesixty.init_submitlearnthreesixtyform', array('',''));
if($learnthreesixty->formposthtml)
{
	//replace username, firstname, lastname, passkey, partner.url params to values.
	//if openpopup is true add target attribute.
	$searchArray = array('<br/>','$username','$firstname','$lastname','$passcodekey','$partner.urlReturn','$logo');	
	$replaceArray = array('',$USER->username,$USER->firstname,$USER->lastname,get_config('learnthreesixty','passkeycode'),$PAGE->url->out(),get_config('learnthreesixty','logo'));
	$formpost = str_replace($searchArray,$replaceArray,$learnthreesixty->formposthtml);
	if($learnthreesixty->openpopup == 1)	
	 echo str_replace('method="post"','method="post" target="_blank"',$formpost);
	else
		echo $formpost;
	//echo str_replace('<br/>','',$learnthreesixty->formposthtml);
}
// Replace the following lines with you own code
//echo $OUTPUT->heading('Yay! It works!');

// Finish the page
echo $OUTPUT->footer();
