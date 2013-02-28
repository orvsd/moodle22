<?php

// This file is part of Learn360 module for Moodle 2.0

/**
 * The main learnthreesixty configuration form
 *
 * It uses the standard core Moodle formslib. For more info about them, please
 * visit: http://docs.moodle.org/en/Development:lib/formslib.php
 *
 * @package    mod
 * @subpackage learnthreesixty
 * @copyright  2012 http://www.Learn360.com
 * @license    http://www.Learn360.com/userterms.aspx
 * @Author	Nitesh Sanghvi
 */

defined('MOODLE_INTERNAL') || die();
//require_once('FirePHPCore/FirePHP.class.php');
require_once($CFG->dirroot.'/course/moodleform_mod.php');

/**
 * Module instance settings form
 */
class mod_learnthreesixty_mod_form extends moodleform_mod {

    /**
     * Defines forms elements
     */
	 
    public function definition() {		
        $mform = $this->_form;

        //-------------------------------------------------------------------------------
        // Adding the "general" fieldset, where all the common settings are showed
        $mform->addElement('header', 'general', get_string('general', 'form'));

        // Adding the standard "name" field
        $mform->addElement('text', 'name', get_string('learnthreesixtyname', 'learnthreesixty'), array('size'=>'64'));
        if (!empty($CFG->formatstringstriptags)) {
            $mform->setType('name', PARAM_TEXT);
        } else {
            $mform->setType('name', PARAM_CLEAN);
        }
        $mform->addRule('name', null, 'required', null, 'client');
        $mform->addRule('name', get_string('maximumchars', '', 255), 'maxlength', 255, 'client');
        $mform->addHelpButton('name', 'learnthreesixtyname', 'learnthreesixty');

        // Adding the standard "intro" and "introformat" fields
        //$this->add_intro_editor();
		
		//Adding form post text area field
		$mform->addElement('textarea', 'formposthtml','Learn360 post data','wrap="virtual" rows="15" cols="80"');
        $mform->setType('formposthtml', PARAM_RAW);
        $mform->setDefault('formposthtml', '');
		
		//adding description which comes from learn360 after sso
		$mform->addElement('hidden', 'title_STRDESCRIPTION');
        $mform->setType('title_STRDESCRIPTION', PARAM_RAW);
        $mform->setDefault('title_STRDESCRIPTION', '');
		
		$mform->addElement('advcheckbox', 'openpopup', '', 'Open this Learn360 resource in a new window', null, array(0, 1));

        // adding more fieldsets ('header' elements) if needed for better logic
        //$mform->addElement('static', 'label1', 'learnthreesixtysetting1', 'Your learnthreesixty fields go here. Replace me!');

        //$mform->addElement('header', 'learnthreesixtyfieldset', get_string('learnthreesixtyfieldset', 'learnthreesixty'));
        //$mform->addElement('static', 'label2', 'learnthreesixtysetting2', 'Your learnthreesixty fields go here. Replace me!');

        //-------------------------------------------------------------------------------
        // add standard elements, common to all modules
        $this->standard_coursemodule_elements();
        //-------------------------------------------------------------------------------
        // add standard buttons, common to all modules
        $this->add_action_buttons();
    }
	
	function data_preprocessing(&$default_values){
		global $PAGE;	
		
    }
	
	function definition_after_data() {
        global $CFG, $COURSE,$PAGE,$USER;
        $mform =& $this->_form;
		//ob_start();				
		//		$firephp = FirePHP::getInstance(true);
				//$firephp->log($mform, 'mPost');
		//		$firephp->log(rawurlencode($PAGE->url->out()),'PageVariables');
		//$var = array('i'=>10, 'j'=>20);
		
		$sent  = optional_param('sent', 0, PARAM_INT);         // URL instance id
		$update = optional_param('update', 0, PARAM_INT);         // URL instance id
			if(!$sent && !$update)
			{	
				$mform->addElement('html','<div><h1>You are now being redirected to Learn360</h1></div>');
				$passthroughurl = "";
				$passthroughurl = get_config('learnthreesixty', 'passthroughpath');
				$passthroughurl .= 'strPassKeyCode=' . get_config('learnthreesixty','passkeycode');
				$passthroughurl .= '&idUser=' . $USER->username;
				$passthroughurl .= '&strUsername=' . $USER->username;
				$passthroughurl .= '&strLastName=' . $USER->lastname;
				$passthroughurl .= '&strFirstName=' . $USER->firstname;
				$passthroughurl .= '&strEmail=' . $USER->email;
				$passthroughurl .= '&logo=' . get_config('learnthreesixty','logo');
				$passthroughurl .= '&strUserRoleForResources=' . get_config('learnthreesixty','teacherrole');
				$passthroughurl .= '&partner.urlReturn=' . str_replace('%26amp%3B','%26',rawurlencode($PAGE->url->out()."&sent=1"));				
				$passthroughurl .= '&Partner_is_c1=1';
				$passthroughurl .= '&video_id=-1';
				$passthroughurl .= '&ContentType=Video';	
				//ob_start();				
				//$firephp = FirePHP::getInstance(true);				
				//$firephp->log($passthroughurl,'passthroughurl');
				  // window.location = 'http://www.learn360.net/Services/LiveText.aspx?
  // strPassKeyCode=dArpNDmLkKhJz1hoLyn%2bKxxaTTJTFJK9ecDF7IWFZe8%3d
  // &idUser=
  // &strUsername=admin
  // &strLastName=Admin
  // &strFirstName=User
  // &strEmail=nsanghvi@allianceglobalservices.com
  // &logo=moodle
  // &strUserRoleForResources=Teacher
  // &partner.urlReturn=http%3A%2F%2Flocalhost%3A360%2Fmoodle%2Fcourse%2Fmodedit.php%3Fadd%3Dlearnthreesixty%26type%3D%26course%3D3%26section%3D0%26return%3D0%26sent%3D1
  // &Partner_is_c1=1
  // &video_id=-1
  // &ContentType=Video';

				//redirect($passthroughurl);
				$PAGE->requires->js_init_call('M.mod_learnthreesixty.init_redirecttolearn360', array($passthroughurl,get_string('redirectmessage','learnthreesixty')));
			}
			else
			{
				//get form data from post
				//set the element values from form post.
				if(isset($_POST['formPostLink']))
				{
					$mform->getElement('formposthtml')->setValue($_POST['formPostLink']);
					$mform->getElement('name')->setValue(str_replace('%27','\'',$_POST['title_STRTITLE']));				
				//$mform->getElement('introeditor')->setValue($_POST['formPostLink']);	
				//$PAGE->requires->js_init_call('M.mod_learnthreesixty.init_displayformvalues',array($_POST['formPostLink']));
					$PAGE->requires->js_init_call('M.mod_learnthreesixty.init_displayformvalues',array($PAGE->url->out()));
				}
			}
		}
}
