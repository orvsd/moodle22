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
 * Define the metalink block's class
 *
 * @package    block_metalink
 * @author      Mark Johnson <mark.johnson@tauntons.ac.uk>
 * @copyright   2010 Tauntons College, UK
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * metalink Block's class
 */
class block_metalink extends block_base {

    /**
     * Set the title
     */
    public function init() {
        $this->title = get_string('pluginname', 'block_metalink');
    }

    /**
     * Set where the block should be allowed to be added
     *
     * This block is an admin tool, so site and my moodle pages should be fine.
     *
     * @return array
     */
    public function applicable_formats() {
        return array('site' => true, 'my' => true);
    }

    /**
     * Generate the contents for the block
     *
     * Check if there has been a tutor role set. If there has, display the form
     * for choosing a file. If not, display a message with a link to the
     * settings page. Also initaliases Javascript for asynchronous processing.
     *
     * @global object $CFG Global config object
     * @global object $USER Current user record
     * @return object Block contents and footer
     */
    public function get_content () {
        if ($this->content !== null) {
            return $this->content;
        }

        $this->content->footer='';
        $this->content->text='';
        global $CFG;
        global $USER;
        $context = get_context_instance(CONTEXT_SYSTEM);
        //only let people with permission use the block- everyone else will get an empty string
        if (has_capability('block/metalink:use', $context)) {
            //check that there is a tutor role configure
            if (!enrol_is_enabled('meta')) {
                $url = new moodle_url('/admin/settings.php', array('section' => 'manageenrols'));
                $this->content->text .= get_string('metadisabled', 'block_metalink').' ';
                $strmanage = get_string('manageenrols', 'enrol');
                $this->content->text .= html_writer::tag('a', $strmanage, array('href' => $url));
            } else {
                require_once($CFG->dirroot.'/blocks/metalink/block_metalink_form.php');
                $url = new moodle_url('/blocks/metalink/process.php');
                $mform = new block_metalink_form($url->out());
                $form = $mform->display();
                $this->content->text.= $form;
            }
        }

        $jsmodule = array(
            'name'  =>  'block_metalink',
            'fullpath'  =>  '/blocks/metalink/module.js',
            'requires'  =>  array('base', 'node', 'io', 'overlay')
        );

        $this->page->requires->string_for_js('upload', 'moodle');
        $this->page->requires->string_for_js('pluginname', 'block_metalink');
        $this->page->requires->js_init_call('M.block_metalink.init', null, false, $jsmodule);

        return $this->content;
    }

    /**
     * Cron Function - checks for existence of cron file, and processes
     *
     * If the cron file exists, it is validated and processed.  If specified, it
     * is then moved to a folder for processed files, otherwise it's deleted.
     * Old processed files which are no longer needed are then deleted.
     *
     * @global object $CFG Global config object
     * @return bool
     */
    public function cron() {

        global $CFG;
        require_once($CFG->dirroot.'/blocks/metalink/locallib.php');

        $cfg_metalink = get_config('block/metalink');

        if (is_file($cfg_metalink->cronfile)) {
            $report = array();
            $handler = new block_metalink_handler($cfg_metalink->cronfile);
            try {
                if (!enrol_is_enabled('meta')) {
                    throw new metalink_exception('metadisabled');
                }
                $handler->validate();
                //process file
                $report = explode("\n", $handler->process(true));
                $procdir = $cfg_metalink->cronprocessed;

                if ($cfg_metalink->keepprocessed) {
                    if (is_dir($procdir) && is_writable($procdir)) {
                        //move the processed file to prevent wasted time re-processing
                        $date = date('Ymd');
                        $filenames = new stdClass;
                        $filenames->old = $cfg_metalink->cronfile;
                        $filenames->new = $procdir.'/'.basename($cfg_metalink->cronfile).'.'.$date;

                        if (rename($filenames->old, $filenames->new)) {
                            $report[] = get_string('cronmoved', 'block_metalink', $filenames);
                        } else {
                            $report[] = get_string('cronnotmoved', 'block_metalink', $filenames);
                        }
                    } else {
                        $report[] = get_string('nodir', 'block_metalink', $procdir);
                    }
                } else {
                    unlink($cfg_metalink->cronfile);
                }

                if ($cfg_metalink->keepprocessedfor > 0) {
                    $removed = 0;
                    $processed = scandir($procdir);
                    foreach ($processed as $processed) {
                        if (is_file($procdir.'/'.$processed)) {
                            $path_parts = pathinfo($procdir.'/'.$processed);
                            $ext = $path_parts['extension'];
                            $threshold = date('Ymd', time()-($cfg_metalink->keepprocessedfor*86400));
                            $iscronfile = $path_parts['filename'] == basename($cfg_metalink->cronfile);
                            if ($iscronfile && $ext < $threshold) {
                                if (unlink($procdir.'/'.$processed)) {
                                    $removed++;
                                } else {
                                    $path = $procdir.'/'.$processed;
                                    $report[] = get_string('cantremoveold',
                                                           'block_metalink',
                                                           $path);
                                }
                            }
                        }
                    }
                    if ($removed) {
                        $report[] = get_string('removedold', 'block_metalink', $removed);
                    }
                }
                //email outcome to admin
                $email = implode("\n", $report);
            } catch (metalink_exception $e) {
                $message = get_string($e->errorcode, $e->module, $e->a);
                $email = $message;
                $report[] = $message;
            }
            email_to_user(get_admin(),
                          get_admin(),
                          get_string('metalink_log', 'block_metalink'),
                          $email);
            foreach ($report as $line) {
                mtrace($line);
            }
        } else {
            mtrace(get_string('nocronfile', 'block_metalink'));
        }
        return true;

    }


}
