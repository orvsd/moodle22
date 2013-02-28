<?php
/**
 * Defines the version of learnthreesixty
 *
 * This code fragment is called by moodle_needs_upgrading() and
 * /admin/index.php
 *
 * @package    mod
 * @subpackage learnthreesixty
 * @copyright  2012 http://www.Learn360.com
 * @license    http://www.Learn360.com/userterms.aspx
 */

defined('MOODLE_INTERNAL') || die();

//$module->version   = 0;               // If version == 0 then module will not be installed
$module->version   = 2010032235;      // The current module version (Date: YYYYMMDDXX)
$module->requires  = 2010031900;      // Requires this Moodle version
$module->cron      = 0;               // Period for cron to check this module (secs)
$module->component = 'mod_learnthreesixty'; // To check on upgrade, that module sits in correct place
