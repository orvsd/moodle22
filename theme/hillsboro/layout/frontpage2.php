<?php
$hasheading = ($PAGE->heading);
$hasnavbar = (empty($PAGE->layout_options['nonavbar']) && $PAGE->has_navbar());
$hasfooter = (empty($PAGE->layout_options['nofooter']));
$hassidepost = $PAGE->blocks->region_has_content('side-post', $OUTPUT);
$showsidepost = ($hassidepost && !$PAGE->blocks->region_completely_docked('side-post', $OUTPUT));
$custommenu = $OUTPUT->custom_menu();
$hascustommenu = (empty($PAGE->layout_options['nocustommenu']) && !empty($custommenu));
$bodyclasses = array();
if ($showsidepost) {
    $bodyclasses[] = 'side-post-only';
} else if (!$showsidepost) {
    $bodyclasses[] = 'content-only';
}
if ($hascustommenu) {
    $bodyclasses[] = 'has-custom-menu';
}
echo $OUTPUT->doctype() ?>


<!--Begin HTML-->
<html <?php echo $OUTPUT->htmlattributes() ?>>

<head>
    <title><?php echo $PAGE->title ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->pix_url('favicon', 'theme')?>" />
    <?php echo $OUTPUT->standard_head_html() ?>
</head>

<body id="<?php p($PAGE->bodyid) ?>" class="<?php p($PAGE->bodyclasses.' '.join(' ', $bodyclasses)) ?> grd-white gradient">
<?php echo $OUTPUT->standard_top_of_body_html() ?>

<div class="body-wrapper grd-white gradient" id="page">
            
            <!-- Header -->
            <div class="header">      
                <!--User Bar-->
                <div class="user-bar">
                	<div class="container">
                        <div class="left">
                            <a href="#" class="logo">
                                 Hillsboro Online Acadamy 
                            </a>
                            <span class="powered-by">
                            	powered by <strong>Hillsboro School District</strong>
                            </span>
                        </div>
                		<div class="right">
					<div class="headermenu">
		               		</div>
				<?php if (!isLoggedin()) { ?>
					<form action="<?php echo $CFG->httpswwwroot; ?>/login/index.php" method="post" id="login" <?php echo $autocomplete; ?> >
		                	<div class="sign-in">
						<div class="pad-20">
							<span style="color:#fff"><label for="username"><?php print_string("username") ?></label> <input type="text" id="username" name="username" /></span><br /><br />
							<span style="color:#fff"><label for="password"><?php print_string("password") ?></label> <input type="password" id="password" name="password" /></span> <br />
							<br /><br />
							<input style="padding:3px;float:right;" type="submit" id="loginbtn" value="<?php print_string("login") ?>" />
                           		 	</div>
					</div>
					</form>
				<?php }
				
				else { ?>

		                    <div class="logged-in">
		                    	<span class="welcome-message">
						<?php
						    echo $OUTPUT->login_info();
						        if (!empty($PAGE->layout_options['langmenu'])) {
						            echo $OUTPUT->lang_menu();
						        }
						echo $PAGE->headingmenu ?>
		                        	<span style="display: none">Welcome, <strong>Linda</strong> &nbsp; <a href="">Logout</a></span>
		                    	</span>
		                    	<ul class="clear-list">
		                        	<li class="my-dashboard"><a href="~/my">My Dashboard</a></li>
		                            <li class="my-messages"><a href="">My Messages</a></li>
		                            <li class="my-profile"><a href="">My Profile</a></li>
		                            <li class="my-settings"><a href="">Settings</a></li>
		                        </ul>
		                    </div>
				<?php } ?>
                        </div>
                    </div>
                </div>
                <!--Masthead and Navigation-->
                <div class="masthead">        	
                    <div class="masthead-content grd-green gradient">
                    	<div class="container">
                            <div class="navigation">
                            	<?php if ($hascustommenu) { ?>
					<div id="custommenu"><?php echo $custommenu; ?></div>
				<?php } ?>
                            </div>
                        </div>    
                    </div>
                    <div class="masthead-btm-border">
                    </div>
                </div>
            </div>
            <!-- End Header -->
            
            <!--Page Content-->
            
            <div class="page-content">
            	<div class="page-header">
                    <div class="page-header-content grd-blue">
			<div class="container">			
				<h1><?php echo $PAGE->heading ?></h1>
				<div class="breadcrumb"><?php echo $OUTPUT->navbar(); ?></div>
		                <div class="navbutton"> <?php echo $PAGE->button; ?></div>
			</div>
                    </div>
                    <div class="page-header-btm-border">
                    </div>
		</div>
                <div class="container page">
            		<div class="page-inner gradient">
			        <div class="folded-corner">
			                <span></span>
			        </div>
				<div class="main-content">
					<?php echo $OUTPUT->main_content() ?>
				</div>
				<?php if ($hassidepost) { ?>
			 	<div class="sidebar blocks-region">
					<?php echo $OUTPUT->blocks_for_region('side-post') ?>  
				</div>
				<?php } ?>
			</div>
                </div>
            </div>
            <!--Footer-->
            <div class="footer">
            	<div class="footer-top-border"></div>
                <div class="footer-content">
                    <div class="container">
			 <?php if ($hasfooter) { ?>
			    <div id="page-footer" class="wrapper">
				<p class="helplink"><?php echo page_doc_link(get_string('moodledocslink')) ?></p>
				<?php
				    echo $OUTPUT->login_info();
				    echo $OUTPUT->home_link();
				    echo $OUTPUT->standard_footer_html();
				?>
			    </div>
			<?php } ?>
                    </div>
		</div>
            </div>
        </div><!--End "body-wrapper"-->
<?php echo $OUTPUT->standard_end_of_body_html() ?>
</body>
</html>
