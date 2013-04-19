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
 * @package    report
 * @subpackage parent
 * @copyright  2012 Kenneth Lett (kennric@osuosl.org)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

function report_parent_render_table($data) {
    if (!empty($data)) {
        $oddeven = 1;
        $keys=array_keys($data);
        $lastrowkey = end($keys);
        $output = '<table class="generaltable parentGradeTable">';
        foreach($data['head'] as $headrow) {
            $output .= '<tr>';
            foreach($headrow as $key => $col) {
                $output .= '<th class="header c' . $key . '" scope="col">' . $col . '</th>';
            }
            $output .= "</tr>\n";
        }

        $first = true;
        foreach ($data['data'] as $row) {
            $oddeven = $oddeven ? 0 : 1;
            if(!$first) {
                $row[0] = "";
            } 

            $output .= '<tr class="r' . $oddeven . '">'."\n";
            foreach ($row as $key => $value) {
                $output .= '<td>'. $value .'</td>';
            }
            $output .= '</tr>'."\n";
            $first = false;
        }
    } else {
        return false;
    }

    $output .= '</table>'."\n";

    return $output;
}

function report_parent_get_parent_data($studentid) {
    $addressblock = '<div><div class="addressBox"></div><img src="img/795591.jpeg" style="float: right;"></div><div style="clear:both;"></div>';
    return $addressblock;
}

function report_parent_render_header($student) {
    $parent_data = report_parent_get_parent_data($student->id);
    $config = get_config('parent_report_settings');
    $preamble = $config->preamble_text;
    $namestring = $preamble . ' <span class="bold">' . $student->firstname . ' ' . $student->lastname . '</span>';

    $output = '<div class="addressBlock">';
    $output .= '<span class="parentHead">' . $namestring . '</span>';
    $output .= $parent_data;
    $output .= '</div>';
    $output .= '<p class="report_parent_body">' . $config->header_text . '</p>';

    return $output;
}

function report_parent_render_footer($student) {
    $config = get_config('parent_report_settings');
    return '<span class="page-break">' . $config->footer_text . '</span>';
}

function report_parent_render_progress($course, $student) {

    global $CFG, $DB, $COURSE, $OUTPUT;
    $output = "";
    $courseid = $course->id;
    $COURSE = $course;

    $coursecontext  = get_context_instance(CONTEXT_COURSE, $courseid);

    // Get specific block config
    $progress_instance = $DB->get_records('block_instances', array('parentcontextid' => $coursecontext->id, 'blockname' => 'progress'));
    $pi = array_pop($progress_instance);
    $config = unserialize(base64_decode($pi->configdata));

    // Get the modules to check progress on
    $modules = modules_in_use();
    if (empty($modules)) {
        return false;
    }

    // Check if activities/resources have been selected in config
    $events = event_information($config, $modules);
    
    if ($events==null) {
        return false;
    }
    if (empty($events)) {
        return false;
    }
    $numevents = count($events);

    $picturefields = user_picture::fields('u');
    $sql = "SELECT DISTINCT $picturefields, u.lastaccess
             FROM {user} u, {role_assignments} a $groupsfrom
            WHERE a.contextid = :contextid
              AND a.userid = u.id
              $rolewhere
              $groupwhere";
    $params['contextid'] = $context->id;
    $users = array_values($DB->get_records_sql($sql, $params));
    $numberofusers = count($users);

    // Setup submissions table
    $table = new flexible_table('mod-block-progress-overview');
    $tablecolumns = array('progressbar', 'progress');
    $table->define_columns($tablecolumns);
    $tableheaders = array(
                      'Progress for ' . $course->shortname,
                      '',
                      //get_string('progress', 'block_progress')
                    );
    $table->define_headers($tableheaders);
    $table->sortable(true);

    $table->set_attribute('class', 'generalbox parentProgress');
    $table->column_style_all('padding', '2px 5px');
    $table->column_style_all('text-align', 'left');
    $table->column_style_all('vertical-align', 'middle');
    $table->column_style('progress', 'text-align', 'center');
    $table->no_sorting('progressbar');
    $table->define_baseurl($PAGE->url);
    $table->setup();

    $name = '<a href="'.$CFG->wwwroot.'/user/view.php?id='.$student->id.'&course='.
            $course->id.'">'.fullname($student).'</a>';
    $attempts = get_attempts($modules, $config, $events, $student->id, $course->id);
    $progressbar = progress_bar($modules, $config, $events, $student->id, $course->id, $attempts, true);
    $progressvalue = get_progess_percentage($events, $attempts);
    $progress = $progressvalue.'% of the course is complete.';

    $rows[] = array(
        'progressbar'=>$progressbar,
        'progress'=>$progress
    );

    foreach ($rows as $row) {
        $table->add_data(array($row['progressbar'], $row['progress']));
    }

    $table->finish_output();
    return true;
}

function report_parent_get_data($studentid, $courseid) {
    global $CFG, $DB;

    $sql = "SELECT
                c.fullname AS Course, 
                CASE 
                    WHEN gi.itemtype = 'course' 
                        THEN 'Course Total'
                    ELSE gi.itemname
                END AS Item,
      
                ROUND(gg.finalgrade,2) AS Grade,
                ROUND(gg.rawgrademax,2) AS Total_Possible
              
            FROM prefix_course AS c
                LEFT JOIN prefix_context AS ctx ON c.id = ctx.instanceid
                LEFT JOIN prefix_role_assignments AS ra ON ra.contextid = ctx.id
                LEFT JOIN prefix_user AS u ON u.id = ra.userid
                LEFT JOIN prefix_grade_grades AS gg ON gg.userid = u.id
                LEFT JOIN prefix_grade_items AS gi ON gi.id = gg.itemid
              
            WHERE  gi.courseid = c.id 
                AND u.id = %%USERID%%
                AND c.id = %%COURSEID%%
            ORDER BY Item";

    $sql = prepare_sql($sql, $studentid, $courseid);
    $data = array();

    if($rs = execute_query($sql)) {
      foreach ($rs as $row) {
        $data[] = array_values((array) $row);
      }
    } else {
        return false;
    }
    if (empty($data)) {
        return false;
    }

    return $data;
}

function report_parent_form_selectors() {
    global $CFG, $DB;
    $selectors = array();
    $selectors['school'] = report_parent_get_schoollist();
    $selectors['course'] = $DB->get_records_menu('course', array(), 'id', 'id,shortname');

    $selectors['course'] = array('' => "all") + $selectors['course'];

    $sql = "SELECT DISTINCT u.id, CONCAT(u.lastname,', ',u.firstname) AS 'name'
              FROM mdl_role_assignments
              LEFT JOIN mdl_user AS u
              ON u.id = mdl_role_assignments.userid
              WHERE mdl_role_assignments.roleid = ?
              ORDER BY u.lastname";

    $param = array('5');

    $selectors['student'] = $DB->get_records_sql_menu($sql, $param);

    foreach($selectors['student'] as $id=>$student) {
        $select = "userid = ? AND roleid IN (1,2,3,4,6,9,11,13)";
        $params = array($id);
        $not_a_student = $DB->record_exists_select("role_assignments", $select, $params);
        if ($not_a_student) {
            unset($selectors['student'][$id]);
        }
    } 
    return $selectors;
}

function report_parent_get_schoollist() {
    global $CFG, $DB;
    $sql = "SELECT DISTINCT g.name
              FROM mdl_groups AS g";

    $groups = $DB->get_records_sql($sql);

    $schools = array();
    foreach($groups as $id=>$group) {
        $regex = "/-\s[0-9]{3,4}/";
        if(preg_match($regex,$group->name)) {
            $schools[] = $group->name;
        }
        //$schools[] = $name;
    }
    return $schools;
}

function report_parent_get_students($studentid=null, $courseids, $schoolname=null) {
    global $CFG, $DB;
    $students = array();

    if($studentid) {
        $students[] = $DB->get_record('user', array('id'=>$studentid));
        return $students;
    }

    // school - find school in "groups" and find users in "groups_members"
    if($schoolname) {
        $sql = "SELECT DISTINCT u.*
                  FROM mdl_groups AS g
                  LEFT JOIN mdl_groups_members AS m
                    ON m.groupid = g.id
                  LEFT JOIN mdl_user AS u
                    ON u.id = m.userid
                  WHERE g.name = ?";
        $param = array($schoolname);
    } else if($courseids[0] != 0) { // course - find students enrolled in a course
       $sql = "SELECT DISTINCT u.* 
                 FROM mdl_enrol
                 LEFT JOIN mdl_user_enrolments
                   ON mdl_user_enrolments.enrolid=mdl_enrol.id
                 LEFT JOIN mdl_user AS u
                   ON mdl_user_enrolments.userid = u.id
                 WHERE mdl_enrol.roleid=5
                 AND mdl_enrol.courseid IN ( ? )"; 
        $param = $courseids;
    } else { // otherwise, get all the students
        $sql = "SELECT DISTINCT u.*
                  FROM mdl_role_assignments
                  LEFT JOIN mdl_user AS u
                  ON u.id = mdl_role_assignments.userid
                  WHERE mdl_role_assignments.roleid = ?";
        $param = array('5');
    }

    $students = $DB->get_records_sql($sql, $param);

    // ugly ugly ugly! fix the query instead when time allows
    // @TODO - filter by other roles in the query

    foreach($students as $id=>$student) {
        $select = "userid = ? AND roleid IN (1,2,3,4,6,9,11,13)";
        $params = array($id);
        $not_a_student = $DB->record_exists_select("role_assignments", $select, $params);
        if ($not_a_student) {
            unset($students[$id]);
        }
    } 

    return $students;
}

function report_parent_render_form($selectors, $courseids, $studentid="", $schoolid="") {
    global $DB, $CFG;

    $course_multiselect = 'Courses<br><select name="courseids[]" multiple>';

    foreach($selectors['course'] as $id=>$course) {
        $selected = "";
        if (in_array($id, $courseids)) {
            $selected = 'selected="selected"';
        } 
        $course_multiselect .= '<option '
                            . $selected 
                            . ' value="' . $id . '">';
        $course_multiselect .= $course;
        $course_multiselect .= "</option>";
    }

    $course_multiselect .= "</select>";
    
    $form = "";
    $table = new html_table();
    $table->width = 'auto';
    $table->align = array('left','left','left','left','left','left','left','left');
    $table->data = array(
        array($course_multiselect),
        array("Student<br>" . html_writer::select($selectors['student'], 
            'studentid', $studentid, array(''=>'all'), null, true)),
        array("School<br>" . html_writer::select($selectors['school'], 
            'schoolid', $schoolid, array(''=>'all'), null,  true)),
        array('<input type="submit" value="View" />'));

    $form .= '<div id="filterform">';
    $form .= '<form action="index.php" method="get" id="filterform">'."\n" .'<div>'."\n";

    $form .= html_writer::table($table);

    $form .= '<input type="hidden" name="view" value=1>';
    $form .= '</div>';
    $form .= '</form>';
    $form .= '</div>';

    return $form;
}

function prepare_sql($sql, $studentid, $courseid) {
    global $DB;
    
    $sql = str_replace('%%USERID%%', $studentid, $sql);
    $sql = str_replace('%%COURSEID%%', $courseid, $sql);

    // See http://en.wikipedia.org/wiki/Year_2038_problem
    $sql = str_replace(array('%%STARTTIME%%','%%ENDTIME%%'),array('0','2145938400'),$sql);
    $sql = preg_replace('/%{2}[^%]+%{2}/i','',$sql);
    return $sql;
}

function execute_query($sql, $limitnum = REPORT_CUSTOMSQL_MAX_RECORDS) {
    global $DB, $CFG;

    $sql = preg_replace('/\bprefix_(?=\w+)/i', $CFG->prefix, $sql);

    return  $DB->get_recordset_sql($sql, null, 0, $limitnum);
}

function get_teacher_name($courseid) {
    $role = $DB->get_record('role', array('shortname' => 'editingteacher'));
    $context = get_context_instance(CONTEXT_COURSE, $courseid);
    $teachers = get_role_users($role->id, $context);

    $teacherstring = "";
    foreach($teachers as $teacher) {
        $teacherstring .= '<br>' . $teacher->fullname;
    }
}
