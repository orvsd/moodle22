<?php

$hasheading = ($PAGE->heading);
$hasnavbar = (empty($PAGE->layout_options['nonavbar']) && $PAGE->has_navbar());
$hasfooter = (empty($PAGE->layout_options['nofooter']));
$hassidepre = (empty($PAGE->layout_options['noblocks']) && $PAGE->blocks->region_has_content('side-pre', $OUTPUT));
$hassidepost = (empty($PAGE->layout_options['noblocks']) && $PAGE->blocks->region_has_content('side-post', $OUTPUT));
$haslogininfo = (empty($PAGE->layout_options['nologininfo']));

$showsidepre = ($hassidepre && !$PAGE->blocks->region_completely_docked('side-pre', $OUTPUT));
$showsidepost = ($hassidepost && !$PAGE->blocks->region_completely_docked('side-post', $OUTPUT));

$custommenu = $OUTPUT->custom_menu();
$hascustommenu = (empty($PAGE->layout_options['nocustommenu']) && !empty($custommenu));

$bodyclasses = array();
if ($showsidepre && !$showsidepost) {
    $bodyclasses[] = 'side-pre-only';
} else if ($showsidepost && !$showsidepre) {
    $bodyclasses[] = 'side-post-only';
} else if (!$showsidepost && !$showsidepre) {
    $bodyclasses[] = 'content-only';
}
if ($hascustommenu) {
    $bodyclasses[] = 'has_custom_menu';
}

echo $OUTPUT->doctype() ?>

<html <?php echo $OUTPUT->htmlattributes() ?>>

<head>
    <title><?php echo $PAGE->title ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->pix_url('favicon', 'theme')?>" />
    <?php echo $OUTPUT->standard_head_html() ?>
</head>

<body id="<?php p($PAGE->bodyid) ?>" class="<?php p($PAGE->bodyclasses.' '.join(' ', $bodyclasses)) ?>">

<?php echo $OUTPUT->standard_top_of_body_html(); ?>
<div id="awesomebar">
    <?php
        if( $this->page->pagelayout != 'maintenance' // Don't show awesomebar if site is being upgraded
            && !(get_user_preferences('auth_forcepasswordchange') && !session_is_loggedinas()) // Don't show it when forcibly changing password either
          ) {
            $topsettings = $this->page->get_renderer('theme_krystle2','topsettings');
            echo $topsettings->navigation_tree($this->page->navigation);
            if ($hascustommenu && !empty($PAGE->theme->settings->custommenuinawesomebar)) {
                echo $custommenu;
            }
            echo $topsettings->settings_tree($this->page->settingsnav);
        }
    ?>
</div>

<!--MAIN PAGE-->
<div id="page">
<div id="page-content-outer">
<?php if ($hasheading || $hasnavbar) { ?>
    <div id="page-header">
        <?php if ($hasheading) { ?>

        	<div id="logo">
        	    <div id="profileblock">
			<?php include('profileblock.php')?>
		    </div>
			</div>
		<?php } ?>
	</div>

<!--NAVBAR -->
        <?php if ($hasnavbar) { ?>
            <div class="navbar clearfix">
                <div class="breadcrumb"><?php echo $OUTPUT->navbar(); ?></div>
                <div class="navbutton"> <?php echo $PAGE->button; ?></div>
            </div>
        <?php } ?>

<?php } ?>

<!-- MAIN CONTENT -->
 <div id="page-content-wrap">
    <div id="page-content">
        <div id="region-main-box">
            <div id="region-post-box">
<!--CENTRE SECTION-->
                <div id="region-main-wrap">
                  <div id="region-main-pad">
                    <div id="region-main">
                      <div class="region-content">
                            <?php echo core_renderer::MAIN_CONTENT_TOKEN ?>
                      </div>
                    </div>
                  </div>
                </div>
<!--SIDEPRE-->
                <?php if ($hassidepre) { ?>
                <div id="region-pre" class="block-region">
                   <div class="region-content">
                        <?php echo $OUTPUT->blocks_for_region('side-pre') ?>
                   </div>
                </div>
                <?php } ?>
<!--SIDEPOST-->
                <?php if ($hassidepost) { ?>
                <div id="region-post" class="block-region">
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
    <div id="page-footer">

       <p class="footer-logo"><img src="<?php echo $OUTPUT->pix_url('footer/logos/orglogo', 'theme') ?>"  alt="Moodle Logo" title="Moodle Logo" /></p>
       <p class="logininfo"><?php echo $OUTPUT->login_info();?></p>

<!--SOCIALWEB ICONS-->
       <div class="socioweb-icons">
        <ul>
         <li><a href="#" title="#"><img src="<?php echo $OUTPUT->pix_url('footer/logos/facebook', 'theme') ?>" height="30" width="30" alt="Facebook" title="Facebook" /></a></li>
         <li><a href="#" title="#"><img src="<?php echo $OUTPUT->pix_url('footer/logos/twitter', 'theme') ?>" height="30" width="30" alt="Twitter" title="Twitter" /></a></li>
         <li><a href="#" title="#"><img src="<?php echo $OUTPUT->pix_url('footer/logos/flickr', 'theme') ?>" height="30" width="30" alt="Flickr" title="Flickr" /></a></li>
        </ul>
       </div>
<!--COPYRIGHT-->
	    	<p class="copyright">Krystle2 - based on Aardvark_Makeover for Moodle 2.0 by Mary Evans<br>from an Original Design by Shaun Daubney<br>and using Lei Zhang's Awesomebar</p>
    </div>
    <?php } ?>
    
  </div>
 <div class="clearfix"></div>
</div>

<?php echo $OUTPUT->standard_end_of_body_html() ?>
</body>
</html>
