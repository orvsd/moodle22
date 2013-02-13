<?php
class block_menteesimproved extends block_base {
    public function init() {
        $this->title = get_string('menteesimproved', 'block_menteesimproved');
    }

    function applicable_formats() {
        return array('all' => true, 'tag' => false);
    }

    function specialization() {
        $this->title = isset($this->config->title) ? $this->config->title : get_string('newmenteesimprovedblock', 'block_menteesimproved');
    }

    function instance_allow_multiple() {
        return true;
    }

	public function get_content() {
       global $CFG, $USER, $DB;

        if ($this->content !== NULL) {
            return $this->content;
        }

        $this->content = new stdClass();

        // get all the mentees, i.e. users you have a direct assignment to
        if ($usercontexts = $DB->get_records_sql("SELECT c.instanceid, c.instanceid, u.firstname, u.lastname
                                                    FROM {role_assignments} ra, {context} c, {user} u
                                                   WHERE ra.userid = ?
                                                         AND ra.contextid = c.id
                                                         AND c.instanceid = u.id
                                                         AND c.contextlevel = ".CONTEXT_USER, array($USER->id))) {

            $this->content->text = '<ul>';
            foreach ($usercontexts as $usercontext) {
                $this->content->text .= '
				<li>
				<a href="'.$CFG->wwwroot.'/user/view.php?id='.$usercontext->instanceid.'&amp;course='.SITEID.'">'.fullname($usercontext).'</a>
				<ul>';
				$coursesbyuser = $DB->get_records_sql(
				"SELECT courseid, shortname 
				FROM mdl_user_enrolments ue
				LEFT JOIN mdl_enrol e ON  e.id=ue.enrolid
				LEFT JOIN mdl_course c ON c.id = e.courseid
				WHERE userid=".$usercontext->instanceid.";"
			);
				foreach($coursesbyuser as $course){
					$this->content->text .='<li><a href="'.$CFG->wwwroot.'/course/view.php?id='.$course->courseid.'">'.$course->shortname.'</a></li>';			
				}			
			$this->content->text .=	'</ul>
				</li>';
            }
            $this->content->text .= '</ul>';
        }

        $this->content->footer = '';

        return $this->content;
	  }
}