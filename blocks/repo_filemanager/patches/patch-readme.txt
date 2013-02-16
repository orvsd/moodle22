Moodle 2.0 Patches
------------------

These patches allow the repository file manager to be used along side the default file picker for all 
file selection dialogues within Moodle. The three files within Moodle which need to be changed are:

repository/draftfiles_manager.php
lib/form/filemanager.php
lib/form/filemanager.js

Pre-patched modified versions of these files are supplied in the x-prepatch directories for some Moodle 
releases, as detailed below:

2.0-prepatch: Moodle 2.0 (Build 20101125)
2.0.3+-prepatch: Moodle 2.0.3+ (20110511)

All you have to do is copy the content of the prepatch directory so that it overwrites
the original files in your Moodle installation. If you are using a later version of Moodle, you may 
still use these files, but be warned that there may be security fixes and changes to the 3 patched 
files within your version of Moodle will be lost. You are reccomended to apply the supplied UNIX patch file 
instead, this will cause the necessary changes to be added to your existing Moodle without loosing any of 
the security fixes or changes.


How to Apply the Unix Patch files
---------------------------------

If you don't have a suitabl version of Moodle to use the pre-patched versions of these files and you want
to be able to use the repository file manager to choose files on the module config pages, you should apply
these patches by opening the command prompt, changing to the base directory of your Moodle installation and
then typing:

patch -p1 < blocks/repo_filemanager/patches/all.diff

If the patch fails, you might be able to fix it by adding --fuzz=3 to the command options. The patch file is
usually built against the most recent prepatch version supplied with this module.

Windows users will probably need to install a copy of the patch command, either by finding a standalone 
windows binary or by using Cygwin.

If these patches fail to apply, please report the problem to us.

Patches provided by Tim Williams (tmw@autotrain.org)
AutoTrain e-Learning, http://www.autotrain.org
