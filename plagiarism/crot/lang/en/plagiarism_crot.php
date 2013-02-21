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
 *
 * @package   plagiarism_crot
 * @copyright 2011 Sergey Butakov, Svetlana Kim
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['pluginname'] = 'Crot Plagiarism Checker';
$string['studentdisclosuredefault']  ='All files uploaded will be submitted to a plagiarism detection service';
// strings used for help information
$string['studentdisclosure'] = 'Student Disclosure';
$string['studentdisclosure_help'] = 'This text will be displayed to all students on the file upload page.';
$string['grammarsize'] = 'Grammar size';
$string['grammarsize_help'] = 'Grammar size is size of text used to calculate one hash in document fingerprint. Recommended value is 30.';
$string['windowsize'] = 'Window size';
$string['windowsize_help'] = 'Window size represents how granular tech search will be. Recommended value is 60.';
$string['colour'] = 'Colours';
$string['colour_help'] = 'These colours are used for highlighting of similar text fragments in the side by side comparison of documents. But at the moment colouring function works only with the one colour (#FF0000).';
$string['clusterdistance'] = 'Max Distance between hashes in the text cluster';
$string['clusterdistance_help'] = 'This parameter is used for allocation of hashes into text clusters in the colouring of similar text fragments. Recommended value is 100.';
$string['clustersize'] = 'Minimum cluster size';
$string['clustersize_help'] = 'This is a minimum number of hashes in the text cluster used for colouring of similar text fragments. Recommended value is 2.';
$string['defaultthreshold'] = 'Default Threshold';
$string['defaultthreshold_help'] = 'Assignments with similarity score less than threshold value are not displayed on Anti-Plagiarism - Assignments page.';
$string['globalsearchthreshold'] = 'Global search threshold';
$string['globalsearchthreshold_help'] = 'Reserved for future development. Recommended value is 90.';
$string['MSlivekey'] = 'BING Application ID key';
$string['MSlivekey_help'] = 'You need to obtain the MS Application ID key from the Microsoft to use the global search features.';
$string['globalsearchquerysize'] = 'Global Search Query Size';
$string['globalsearchquerysize_help'] = 'This is the number of words in the query for global search. Recommended value is 7.';
$string['percentageofsearchqueries'] = 'Percentage of search queries for Web search';
$string['percentageofsearchqueries_help'] = 'This is randomly selected percentage of queries from all search queries for Web search. Recommended value is 40.';
$string['numberofwebdocuments'] = 'Number of web documents to be downloaded';
$string['numberofwebdocuments_help'] = 'How many web documents will be downloaded to your server from the list of possible sources on the web. Recommended value is 10.';
$string['cultureinfo'] = 'Culture info for global search';
$string['cultureinfo_help'] = 'Culture information is used in queries for Bing search engine.';
$string['maxfilesize'] = 'Maximum file size';
$string['maxfilesize_help'] = 'Files with the size more than this value are not downloaded from the internet. Recommended value is 1000000.';
$string['cleantables'] = 'Clean tables';
$string['cleantables_help'] = 'It removes all Crot data except assignments set for check up! Recalculation of fingerprints may cause heavy load on the server.';

$string['newexplain'] = 'For more information on this plugin see:';
$string['crot'] = 'Crot';
$string['crot_help'] = 'Crot is an anti-plagiarism tool which supports doc, docx, pdf, odt, rtf, txt, cpp and java files.';
$string['crotexplain'] = 'Crot is an anti-plagiarism tool: it compares assignments copied from peers from the same institution as well as assignments copied from the Internet. It uses document fingerprinting technologies for internal document comparison and the MSN Live search engine to perform global search.<br/><br/>More information can be found at <a href="http://www.crotsoftware.com">www.crotsoftware.com</a>';

$string['usecrot'] ='Enable Crot';
$string['savedconfigsuccess'] = 'Plagiarism Settings Saved';
$string['compareinternet'] = 'Compare submitted files with Internet';
$string['comparestudents'] = 'Compare submitted files with other students files';

//strings copied from block - probably need reworking for new plugin
$string['block_name'] = 'Anti-Plagiarism';
$string['course_summary'] = 'Course Summary';
$string['Topics'] = 'Topics';
$string['report'] = 'Report';
//$string['settings'] = 'Settings';
$string['have_to_be_a_teacher'] = '<c>The block is under construction. <br> You have to be a teacher to see its content';
$string['assignments']='Assignments';
$string['local']='Local';
$string['global']='Global';
$string['settings']='Settings';
$string['settings_cancelled']='Antiplagiarism settings have been canceled';
$string['settings_saved']='Antiplagiarism settings have been saved successfully';
$string['save']='Save';
$string['select_assignment']='Select the assignment';
$string['student_name']='Student name';
$string['similar']='Similar assignments';
//$string['default_threshold']='Default Threshold';
$string['grammar_size']='Grammar size';
$string['colours']='Colours';
$string['window_size']='Window size';
$string['cluster_distance']='Max Distance between hashes in the text cluster';
$string['cluster_size']='Minimum cluster size';
$string['global_search_threshold']='Global search threshold';
$string['default_threshold']='Default Threshold';
$string['global_search_settings']='<b>Global Search settings</b>';
//$string['global_search_threshold']='Global Search Threshold';
$string['MS_live_key']='MS Application ID key';
$string['global_search_query_size']='Global Search Query Size';
$string['percentage_of_search_queries']='Percentage of search queries for Web search (1-100)';
$string['number_of_web_documents']='Number of web documents to be downloaded';
$string['clean_tables']='Clean tables (<b>WARNING! Please read help!</b>)';
$string['culture_info']='Culture info for global search';
$string['antiword_path']='Path to antiword<br/>Keep it empty if you do not want to use antiword <br/>to process MS-Word submissions';
$string['tools']='<b>Tools</b>';
$string['test_global_serach']='Check it to perform quick test of global search';
$string['registration'] = '<b>Registration</b>';
$string['max_file_size'] = 'Maximum file size';

$string['no_similarities'] = 'no similarities';
$string['incorrect_courseid'] = 'Course ID is incorrect';
$string['incorrect_courseAid'] = 'Course A ID is incorrect';
$string['incorrect_courseBid'] = 'Course B ID is incorrect';
$string['incorrect_docAid'] = 'Doc A ID is incorrect';
$string['incorrect_docBid'] = 'Doc B ID is incorrect';
$string['incorrect_fileAid'] = 'File A ID is incorrect';
$string['incorrect_fileBid'] = 'File B ID is incorrect';
$string['incorrect_submAid'] = 'Submission A ID is incorrect';
$string['incorrect_submBid'] = 'Submission B ID is incorrect';
$string['incorrect_assignmentAid'] = 'Assignment A ID is incorrect';
$string['incorrect_assignmentBid'] = 'Assignment B ID is incorrect';
$string['tables_cleaned_up'] = 'Crot tables were cleaned up!';

$string['col_name'] = 'Name';
$string['col_course'] = 'Course';
$string['col_similarity_score'] = 'Similarity score';
$string['file_was_not_found'] = 'Cannot find local file. Most likely it was removed from the system';
$string['course_not_applicable'] = 'not applicable';
$string['no_plagiarism'] = 'no plagiarism have been detected OR check up was not performed yet';
$string['name_unknown'] = 'name is unknown';
$string['webdoc'] = 'Web document: <br> Source:';
$string['webdocument'] = 'Web document';
$string['bing_search'] = '<br>Global plagiarism detection is supported by Bing search engine';
$string['assignments_not_displayed'] = 'Assignments with similarity score less than {$a}% are not displayed';

$string['download_inwicast_message'] = '<p>INWICAST Publisher is a very simple and powerful tool designed to record and publish podcasts, videocasts, screencasts and slidecasts for the web and for mobile devices. INWICAST Publisher allows you to:</p><p>

    * record podcasts, videocasts, screencasts and Powerpoint slidescasts<br/>
    * convert recorded medias to various formats: flv, wmv, mp4, mp3, etc.<br/>
    * create multimedia content for mobile players like iPod or Zune<br/>
    * create and manage multimedia playlists<br/>
    * easily publish your podcasts on your Moodle platform<br/>
</p>';

$string['FILE_FORMAT_NOT_ALLOWED'] = "Sorry but this file format is not allowed for upload";

