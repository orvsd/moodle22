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
 * Reports implementation
 *
 * @package    report
 * @subpackage stats
 * @copyright  1999 onwards Martin Dougiamas (http://dougiamas.com)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

require_once(dirname(__FILE__).'/lib.php');
require_once($CFG->dirroot.'/lib/statslib.php');


function report_stats_report($course, $report, $mode, $user, $roleid, $time) {
    global $CFG, $DB, $OUTPUT;

    if ($user) {
        $userid = $user->id;
    } else {
        $userid = 0;
    }

    $courses = get_courses('all','c.shortname','c.id,c.shortname,c.fullname');
    $courseoptions = array();

    foreach ($courses as $c) {
        $context = get_context_instance(CONTEXT_COURSE, $c->id);

        if (has_capability('report/stats:view', $context)) {
            $courseoptions[$c->id] = format_string($c->shortname, true, array('context' => $context));
        }
    }

    $sql = "SELECT u.firstname AS 'First' , u.lastname AS 'Last', 
      c.fullname AS 'Course', 
      cc.name AS 'Category', 
      CASE 
        WHEN gi.itemtype = 'course' 
           THEN c.fullname + ' Course Total'
             ELSE gi.itemname
             END AS 'Item Name',
              
             ROUND(gg.finalgrade,2) AS Grade,
             DATE_ADD('1970-01-01', INTERVAL gi.timemodified SECOND) AS Time
              
             FROM prefix_course AS c
             JOIN prefix_context AS ctx ON c.id = ctx.instanceid
             JOIN prefix_role_assignments AS ra ON ra.contextid = ctx.id
             JOIN prefix_user AS u ON u.id = ra.userid
             JOIN prefix_grade_grades AS gg ON gg.userid = u.id
             JOIN prefix_grade_items AS gi ON gi.id = gg.itemid
             JOIN prefix_course_categories AS cc ON cc.id = c.category
              
             WHERE  gi.courseid = c.id 
             ORDER BY lastname";


    $sql = $this->prepare_sql($sql);
    if($rs = $this->execute_query($sql)) {
      foreach ($rs as $row) {
        if(empty($finaltable)){
          foreach($row as $colname=>$value){
            $tablehead[] = str_replace('_', ' ', $colname);
          }
        }
        $finaltable[] = array_values((array) $row);
      }
    }

   echo html_writer::table($table);

}

function prepare_sql($sql) {
    global $DB, $USER;
    
    $sql = str_replace('%%USERID%%', $USER->id, $sql);
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

