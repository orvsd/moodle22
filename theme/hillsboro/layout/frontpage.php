<?php
$hasheading = ($PAGE->heading);
$hasnavbar = (empty($PAGE->layout_options['nonavbar']) && $PAGE->has_navbar());
$hasfooter = (empty($PAGE->layout_options['nofooter']));
$hassidepre = $PAGE->blocks->region_has_content('side-pre', $OUTPUT);
$hassidepost = $PAGE->blocks->region_has_content('side-post', $OUTPUT);
$custommenu = $OUTPUT->custom_menu();
$bodyclasses = array();
if ($hassidepre && !$hassidepost) {
    $bodyclasses[] = 'side-pre-only';
} else if ($hassidepost && !$hassidepre) {
    $bodyclasses[] = 'side-post-only';
} else if (!$hassidepost && !$hassidepre) {
    $bodyclasses[] = 'content-only';
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
                        <div class="header-left">
                            <a href="<?php echo $CFG->wwwroot ?>" class="logo">
                                 Hillsboro Online Acadamy 
                            </a>
                        </div>
                		<div class="header-right">
		                	<?php if (!isLoggedin()) { ?>
				        	<div class="sign-in">
							<div class="pad-20">
								<div class="sign-in-header">
									<span class="sign-in-label">Sign In</span>
								</div>
								<form action="<?php echo $CFG->httpswwwroot; ?>/login/index.php" method="post" id="login" <?php echo $autocomplete; ?> >
									<div class="sign-in-inputs">
										<input type="text" id="username" name="username" />
										<input type="password" id="password" name="password" />
									</div>
									<div class="sign-in-btns">
										<input type="submit" id="loginbtn" value="<?php print_string("login") ?>" />
										<a href="<?php echo $CFG->httpswwwroot; ?>/login/forgot_password.php">&raquo; Forgot Password</a>
									</div>
								</form>
							</div>
						</div>

					<?php }
					else { ?>
				            <div class="logged-in" style>
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
				                	<li class="my-dashboard"><a href="<?php echo $CFG->wwwroot ?>/my" title="My Home">My Home</a></li>
				                    	<li class="my-messages"><a href="<?php echo $CFG->wwwroot ?>/message" title="My Messages">My Messages</a></li>
				                    	<li class="my-profile"><a href="<?php echo $CFG->wwwroot ?>/user/profile.php" title="My Profile">My Profile</a></li>
				                    	<li class="my-settings"><a href="<?php echo $CFG->wwwroot ?>/user/editadvanced.php" title="Settings">Settings</a></li>
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
				<ul class="home-link clear-list">
					<li>					
						<a href="<?php echo $CFG->wwwroot ?>/" class="home-icn">Home</a>
					</li>
				</ul>                     	
				<div id="custommenu" style="display:none;" ><?php echo $custommenu; ?></div>
				<script type="text/javascript">
					$(document).ready(function () { 
						setTimeout(function () { 
							$("#custommenu").show();
							},
							250
						);
					});
				</script>
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
					<?php echo $OUTPUT->blocks_for_region('announce') ?>				
				</div>
		            </div>
		            <div class="page-header-btm-border">
		            </div>
			</div>
		    <div class="page-wrapper">
		    <div class="page-wrapper"> <!--Page wrappers apply doodle to background-->   
		        <div class="container page">
		    		<div class="page-inner gradient clearfix">
					<div class="folded-corner">
					        <span></span>
					</div>
					<?php if ($hassidepre) { ?>
						<div class="sidebar-pre blocks-region">
							<?php echo $OUTPUT->blocks_for_region('side-pre') ?>  
						</div>
					<?php } ?>
					<div class="main-content">
						<?php echo $OUTPUT->main_content() ?>
					</div>				
					<?php if ($hassidepost) { ?>
					 	<div class="sidebar-post blocks-region">
							<?php echo $OUTPUT->blocks_for_region('side-post') ?>  
						</div>
					<?php } ?>
				</div>
			 </div>
		    </div>
	    	</div>
	    </div>
            <!--Footer-->
<?php if ($hasfooter) { ?>
            <div class="footer">
            	<div class="footer-top-border"></div>
                <div class="footer-content clearfix">
                    <div class="container clearfix">
			<div class="footer-section two-fifths">
				<h6>Extras</h6>					
				<div class="moodle-footer">				
				<?php 
				echo page_doc_link(get_string('moodledocslink'));
				echo $OUTPUT->standard_footer_html();
				?>
				</div>
				<div class="copyright">
					&copy; <?php echo date("Y"); ?>	Hillsboro Online Academy 				
				</div>
			</div>
			<div class="footer-section fifth">
				<h6>Built on</h6>			
				<a href="http://moodle.org/" title="Moodle"><img src="<?php echo $OUTPUT->pix_url('moodle-logo', 'theme');?>" alt="" /></a> 			
			</div>
			<div class="footer-section fifth">
				<h6>Powered by</h6>
				<a href="http://www.hsd.k12.or.us/" title="Hillsboro School District"><img src="<?php echo $OUTPUT->pix_url('hsd-logo', 'theme');?>" alt="" /></a>
			</div>
			<div class="footer-section fifth">
				<h6>In partnership with</h6>
				<a href="http://orvsd.org/" title="Oregon Virtual School District"><img src="<?php echo $OUTPUT->pix_url('orvsd-logo', 'theme');?>" alt="" /></a>			
			</div>
                    </div>
		</div>
            </div>
<?php } ?>
        </div><!--End "body-wrapper"-->
<?php echo $OUTPUT->standard_end_of_body_html() ?>
<script type="text/javascript">
	$(document).ready(function() {
		$("#username").watermark("<?php print_string("username") ?>");
		$("#password").watermark("<?php print_string("password") ?>");
		// find any anchors within a block_navigation element that have an href that matches our current location
		// and slam a navigation-selected class onto them.
		$("a[href='"+$(location).attr("href")+"']",$(".block_navigation")).closest("p").addClass("navigation-selected");
		$("a[href='"+$(location).attr("href")+"']",$(".navigation")).closest("li").addClass("yui3-menuitem-selected");
	});
</script>
</body>
</html>