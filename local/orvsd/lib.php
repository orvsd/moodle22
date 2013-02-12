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
 * orvsd plugin function library 
 *
 * @package    local
 * @subpackage orvsd
 * @copyright  2012 Kenneth Lett (http://osuosl.org)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die;

function orvsd_init() {
  global $CFG, $DB;
  
  $event_data = new stdClass();
  $event_data->modulename = 'ORVSD';

  // we can register an event, but for now this is redundant
  //events_trigger('orvsd_updated', $eventdata); 
  //
  orvsd_update($event_data);  
}

function orvsd_update($event_data) {
    global $CFG, $DB;

    // turn on webservices and make sure the rest protocol is enabled
    $ws_config = $DB->get_record('config', array('name'=>'enablewebservices'));
    $protocols_config = $DB->get_record('config', array('name'=>'webserviceprotocols'));

    $ws_config->value = 1;
    $DB->update_record('config', $ws_config);

    if(!strpos($protocols_config->value, "rest") === false) {
      $protocols_config->value .= ',rest';
      $DB->update_record('config', $protocols_config);
    }

    $service_id = $DB->get_field('external_services', 
      'id', array('component'=>'local_orvsd'), IGNORE_MISSING);

    if($service_id) {
      $token_id = $DB->get_field('external_tokens', 
          'id', array('externalserviceid'=>$service_id), IGNORE_MISSING);
    } else {
      $token_id = false ;
    }

    $external_token = new stdClass();
    $external_token->token = "13f6df8a8b66742e02f7b3791710cf84";
    $external_token->tokentype = 0;
    $external_token->userid = 2;
    $external_token->contextid = 1;
    $external_token->creatorid = 2;
    $external_token->iprestriction = "140.211.167.0/27,140.211.15.0/24";
    // old ip restriction "127.0.0.1,10.0.2.0/8,192.168.33.0/8";
    $external_token->validuntil = 0;
    $external_token->timecreated = time();

    if($service_id) { 
      if($token_id) {
        print_r("no service_id and token_id!\n");
        print_r("service_id: " . $service_id . " - token_id: " . $token_id . "\n");

        $external_token->externalserviceid = $service_id;
        $external_token->id = $token_id;

        try {
            $DB->update_record('external_tokens', $external_token);
        } catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
            return false;
        }
      } else {
        $external_token->externalserviceid = $service_id;
        try {
            $DB->insert_record('external_tokens', $external_token);
        } catch (Exception $e) {
            return false;
        }
      }

    } else {
      $tmp = $DB->get_records_sql('SHOW TABLE STATUS WHERE name = "mdl_external_services"',null);

      $service_id = $tmp['mdl_external_services']->auto_increment + 1;
      $external_token->externalserviceid = $service_id;

      try {
          $DB->insert_record('external_tokens', $external_token);
      } catch (Exception $e) {
          return false;
      }
    }


    return true;
}
