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
 * siteinfo plugin function library 
 *
 * @package    local
 * @subpackage coursemeta
 * @copyright  2012 Kenneth Lett (http://osuosl.org)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

/**
 * Initialise the coursemeta table with this site's courses
 * @return bool
 */

function coursemeta_update_db() {
    global $CFG, $DB, $SITE;

    $courselist = coursemeta_courselist();
    $courselist_string = '';

    $time = time();

    if (count($courselist) > 0) {
        foreach($courselist as $id=>$shortname) {
            $record = $DB->get_record('coursemeta', array('courseid'=>$id));
            $coursemeta = new stdClass();
            $coursemeta->timemodified = $time;
            if($record) {
                $coursemeta->id = $record->id;
                $DB->update_record('coursemeta', $coursemeta);
            } else {
                $coursemeta->courseid = $id;
                $coursemeta->shortname = $shortname;
                $coursemeta->serial = 0;
                $DB->insert_record('coursemeta', $coursemeta);
            }
        }
    }
    // now remove any course not in our list
    $DB->delete_records_select('coursemeta', 'timemodified < ?', array($time)); 
    return true;
}

/**
 * generate list of courses installed here
 * @return array
 * @TODO: write this function 
 */
function coursemeta_courselist() {
  global $CFG, $DB;
  // get all course idnumbers
  $table = 'course';
  //$select = 'format != "site" AND visible = 1';
  $select = 'format != "site"';
  $params = null;
  $sort = 'id';
  $fields = 'id,shortname';
  $courses = $DB->get_records_select_menu($table,$select,$params,$sort,$fields);

  return $courses;
}

