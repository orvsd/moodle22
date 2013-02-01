According to Arthur Andersen, "ease of use"/navigation is the first reason (74%) what makes a person want to come back after to use a website. User should easily find options for login and logout a website. Most sites use the same module to enter and exit. Login block of moodle dissapears after user is logged. 

I built a block that provides login and logout options. It has two views: first is like to standard login block and changes to the second view when user is logged, showing the following information:
•Greeting: Good Morning, Good Afternoon or Good Evening is displayed in block header. It is shown according to user's timezone. 
•User full Name: linked to user's profile.
•User's image: linked to user's profile.
•Logout Button: click to exit moodle.
•Update Profile: linked to user data in advanced edit mode.
•Last login: shows date and time of the last user login. 

How to install 

• Download and unzip login_logout.zip file
• Copy login_logout folder to /blocks folder of your moodle installation
• Login as Administrator, if plugin check page is displayed, click upgrade button, otherwise go to Notifications page.
• Click on "Turn editing on"
• Add "Login/Logout" block in your frontpage (if standard login block is added, remove it). It can be added in others moodle areas too (mymoodle, courses, etc.)
• Select a good position for your new block and move it
• It has two language files: english and spanish. Other language users can make a copy of the folder /login_logout/lang/en, rename it and translate strings in the file block_login_logout.php

That's all.
 Enjoy!

Luis De Sousa
 IMYCA - Facultad de Ingeniería
 Universidad de Carabobo
 Venezuela
