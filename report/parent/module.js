
M.report_parent = {};

M.report_parent.init = function(Y) {
    Y.on('change', function(e) {
            Y.one('#menustudentid').set('value', "");
            Y.one('#menuschoolid').set('value', "");
        }, '#menucourseid');

    Y.on('change', function(e) {
            Y.one('#menucourseid').set('value', "");
            Y.one('#menuschoolid').set('value', "");
        }, '#menustudentid');

    Y.on('change', function(e) {
            Y.one('#menustudentid').set('value', "");
            Y.one('#menucourseid').set('value', "");
        }, '#menuschoolid');
};

