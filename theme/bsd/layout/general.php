<?php

$hasheading = ($PAGE->heading);
$hasnavbar = (empty($PAGE->layout_options['nonavbar']) && $PAGE->has_navbar());
$hasfooter = (empty($PAGE->layout_options['nofooter']));
$hassidepre = $PAGE->blocks->region_has_content('side-pre', $OUTPUT);
$hassidepost = $PAGE->blocks->region_has_content('side-post', $OUTPUT);

$custommenu = $OUTPUT->custom_menu();
$hascustommenu = (empty($PAGE->layout_options['nocustommenu']) && !empty($custommenu));

$bodyclasses = array();
if ($hassidepre && !$hassidepost) {
    $bodyclasses[] = 'side-pre-only';
} else if ($hassidepost && !$hassidepre) {
    $bodyclasses[] = 'side-post-only';
} else if (!$hassidepost && !$hassidepre) {
    $bodyclasses[] = 'content-only';
}

echo $OUTPUT->doctype() ?>
<html <?php echo $OUTPUT->htmlattributes() ?>>
<head>
    <title><?php echo $PAGE->title ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->pix_url('favicon', 'theme')?>" />
    <?php echo $OUTPUT->standard_head_html() ?>
</head>
<body id="<?php p($PAGE->bodyid) ?>" class="<?php p($PAGE->bodyclasses.' '.join(' ', $bodyclasses)) ?>">
<?php echo $OUTPUT->standard_top_of_body_html() ?>

<div id="page">

<?php if ($hasheading || $hasnavbar) { ?>

    <div id="page-header" class="clearfix">
		<div id="page-header-wrapper">

	        <?php if ($hasheading) { ?>
		    	<h1 class="headermain"><?php echo $PAGE->heading ?></h1>
    		    <div class="headermenu">
        			<?php
            			echo $OUTPUT->login_info();
		           		if (!empty($PAGE->layout_options['langmenu'])) {
		        	       	echo $OUTPUT->lang_menu();
			    	    }
    			       	echo $PAGE->headingmenu
        			?>
	        	</div>
	        <?php } ?>

	    </div>
    </div>

    <?php if ($hasheading) { ?>
      <?php if ($hascustommenu) { ?>
        <div id="custommenu"><?php echo $custommenu; ?></div>
      <?php } else { ?>
        <ul id="page-navigation" class="clearfix">
          <li>&nbsp;</li>
        </ul>
      <?php } ?>
	<?php } ?>

    <?php if ($hasnavbar) { ?>
	    <div class="navbar clearfix">
    	    <div class="breadcrumb"><?php echo $OUTPUT->navbar(); ?></div>
            <div class="navbutton"> <?php echo $PAGE->button; ?></div>
        </div>
    <?php } ?>

<?php } ?>
<!-- END OF HEADER -->

<div id="page-content-wrapper">
    <div id="page-content">
        <div id="region-main-box">
            <div id="region-post-box">

                <div id="region-main-wrap">
                    <div id="region-main">
                        <div class="region-content">
                            <?php echo $OUTPUT->main_content() ?>
                        </div>
                    </div>
                </div>

                <?php if ($hassidepre) { ?>
                <div id="region-pre">
                    <div class="region-content">
                        <?php echo $OUTPUT->blocks_for_region('side-pre') ?>
                    </div>
                </div>
                <?php } ?>

                <?php if ($hassidepost) { ?>
                <div id="region-post">
                    <div class="region-content">
                        <?php echo $OUTPUT->blocks_for_region('side-post') ?>
                    </div>
                </div>
                <?php } ?>

            </div>
        </div>
    </div>
</div>

<!-- START OF FOOTER -->
    <?php if ($hasfooter) { ?>
    <div id="page-footer" class="clearfix" style="font-size:0.8em;">
        <!-- <p class="helplink">
        <?php echo page_doc_link(get_string('moodledocslink')) ?>
        </p> -->
		<p style="text-align:left; width:90%; margin:0.5em auto">
		<strong>The Beaverton School District recognizes the diversity and worth of all individuals and groups.</strong><br />
		It is the policy of the Beaverton School District that there will be no discrimination or harassment of 
		individuals or groups based on race, color, religion, gender, sexual orientation, gender identity, gender 
		expression, national origin, marital status, age, veterans' status, genetic information or disability 
		in any educational programs, activities or employment.</p>

		<p style="text-align:left; width:90%; margin:0.5em auto">All Career and Technical Education (CTE) programs in this school district will be open to all students. 
		The District will take steps to ensure that the lack of English language skills will not be a barrier to 
		admission and participation in CTE Programs.</p>

		<p style="text-align:center;">Title II Officer- Dr. Carl Mead, 503-591-4311 &bull; Title IX Officer- Holly Lekas, 503-591-4429 &bull; District 504 Manager, Constance Bull, 503-591-4365</p>
		</p>        
		<?php
        echo $OUTPUT->login_info();
        echo $OUTPUT->home_link();
        echo $OUTPUT->standard_footer_html();
        ?>
    </div>
    <?php } ?>
</div>
<?php echo $OUTPUT->standard_end_of_body_html() ?>
</body>
</html>
