<?php

class block_login_logout extends block_base {
    public function init() {
        $this->title = get_string('pluginname', 'block_login_logout');
    }

    public function applicable_formats() {
        return array('all' => true);
    }
	
    public function specialization() {
		if (!isloggedin() or isguestuser()) {
			$this->title = get_string('login');
		} else {
			$utz = get_user_timezone_offset();
			if ($utz == 99) {
				$ut = (date('G')*3600 + date('i')*60 + date('s'))/3600;
			} else {
				$ut = ((gmdate('G') + get_user_timezone_offset())*3600 + gmdate('i')*60 + gmdate('s'))/3600;
				If ($ut <= 0) { $ut = 24 + $ut; }
				If ($ut > 24) { $ut = $ut - 24; }
			}
			if ($ut < 12) {
				$this->title =  get_string('morning_greeting', 'block_login_logout');
			} elseif (($ut >=12 ) and ($ut < 19 )) {
				$this->title = get_string('afternoon_greeting', 'block_login_logout');
			} else {
				$this->title = get_string('night_greeting', 'block_login_logout');
			}
		}
    }

    public function get_content () {
        global $USER, $CFG, $OUTPUT, $SESSION, $COURSE;
        $wwwroot = '';
        $signup = '';

        if ($this->content !== NULL) {
            return $this->content;
        }

        if (empty($CFG->loginhttps)) {
            $wwwroot = $CFG->wwwroot;
        } else {
            $wwwroot = str_replace("http://", "https://", $CFG->wwwroot);
        }

        if (!empty($CFG->registerauth)) {
            $authplugin = get_auth_plugin($CFG->registerauth);
            if ($authplugin->can_signup()) {
                $signup = $wwwroot . '/login/signup.php';
            }
        }
        $forgot = $wwwroot . '/login/forgot_password.php';

        $username = get_moodle_cookie();

        $this->content->footer = '';
        $this->content->text = '';

        if (!isloggedin() or isguestuser()) {

			$this->content->text .= html_writer::start_tag('form', array('class'=>'loginform', 'id'=>'login', 'method'=>'post', 'action'=>get_login_url()));
			$this->content->text .= html_writer::start_tag('div', array('class'=>'c1 fld username'));
			$this->content->text .= html_writer::tag('label', get_string('username'), array('for'=>'login_username'));
			$this->content->text .= html_writer::empty_tag('input', array('type'=>'text', 'name'=>'username', 'id'=>'login_username', 'value'=>s($username)));
			$this->content->text .= html_writer::end_tag('div');
			$this->content->text .= html_writer::start_tag('div', array('class'=>'c1 fld password'));
			$this->content->text .= html_writer::tag('label', get_string('password'), array('for'=>'login_password'));

            if (!empty($CFG->loginpasswordautocomplete)) {
				$this->content->text .= html_writer::empty_tag('input', array('type'=>'password', 'name'=>'password', 'id'=>'login_password', 'value'=>'', 'autocomplete'=>'off'));
            } else {
				$this->content->text .= html_writer::empty_tag('input', array('type'=>'password', 'name'=>'password', 'id'=>'login_password', 'value'=>''));
            }
			
			$this->content->text .= html_writer::end_tag('div');
			
            if (isset($CFG->rememberusername) and $CFG->rememberusername == 2) {
				$this->content->text .= html_writer::start_tag('div', array('class'=>'c1 rememberusername'));
				if ($username) {
					$this->content->text .= html_writer::empty_tag('input', array('type'=>'checkbox', 'name'=>'rememberusername', 'id'=>'rememberusername', 'value'=>'1', 'checked'=>'checked'));
				} else {
					$this->content->text .= html_writer::empty_tag('input', array('type'=>'checkbox', 'name'=>'rememberusername', 'id'=>'rememberusername', 'value'=>'1'));
				}
				$label_rememberusername = ' '.get_string('rememberusername', 'admin');
				$this->content->text .= html_writer::tag('label', $label_rememberusername, array('for'=>'rememberusername'));
				$this->content->text .= html_writer::end_tag('div');
            }

			$this->content->text .= html_writer::start_tag('div', array('class'=>'c1 btn'));
			$this->content->text .= html_writer::empty_tag('input', array('type'=>'submit', 'value'=>get_string('login')));
			$this->content->text .= html_writer::end_tag('div');
			$this->content->text .= html_writer::end_tag('form');

            if (!empty($signup)) {
				$this->content->footer .= html_writer::start_tag('div');
				$this->content->footer .= html_writer::link(new moodle_url($signup), get_string('startsignup'));
				$this->content->footer .= html_writer::end_tag('div');
            }
            if (!empty($forgot)) {
				$this->content->footer .= html_writer::start_tag('div');
				$this->content->footer .= html_writer::link(new moodle_url($forgot), get_string('forgotaccount'));
				$this->content->footer .= html_writer::end_tag('div');
            }
			
		} else {
			
			$this->content->text .= html_writer::start_tag('div', array('class'=>'logoutusername'));
			$this->content->text .= html_writer::link(new moodle_url('/user/profile.php', array('id'=>$USER->id)), fullname($USER));
			$this->content->text .= html_writer::end_tag('div');
			$this->content->text .= html_writer::tag('div', $OUTPUT->user_picture($USER, array('size'=>90, 'class'=>'profilepicture')), array('class'=>'logoutuserimg'));
			$this->content->text .= html_writer::start_tag('div', array('class'=>'logoutbtn'));
			$this->content->text .= html_writer::link(new moodle_url('/login/logout.php', array('sesskey'=>sesskey())), html_writer::tag('button', get_string('logout'), array('type'=>'button')));			
			$this->content->text .= html_writer::end_tag('div');
			$this->content->text .= html_writer::start_tag('div', array('class'=>'logoutfooter'));
			$this->content->text .= html_writer::link(new moodle_url('/user/editadvanced.php', array('id'=>$USER->id)), get_string('updatemyprofile'));
			$this->content->text .= html_writer::end_tag('div');
			if($USER->lastlogin){
				$logout_footer = get_string('lastlogin').'<br>'.userdate($USER->lastlogin, get_string('strftimerecentfull')).'<br> ('.format_time(time() - $USER->lastlogin).')';
				$this->content->text .= html_writer::tag('div', $logout_footer, array('class'=>'logoutfooter'));
			}
		}  

        return $this->content;
    }
}


