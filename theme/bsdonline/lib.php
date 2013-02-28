<?php
function bsdonline_set_linkcolor($css, $linkcolor) {
    $tag = '[[setting:linkcolor]]';
    $replacement = $linkcolor;
    if (is_null($replacement)) {
        $replacement = '#2d83d5';
    }
    $css = str_replace($tag, $replacement, $css);
    

    return $css;
}

function bsdonline_set_customcss($css, $customcss) {
    $tag = '[[setting:customcss]]';
    $replacement = $customcss;
    if (is_null($replacement)) {
        $replacement = '';
    }
    $css = str_replace($tag, $replacement, $css);
    return $css;
}





function fusion_save_process_css($css, $theme) {
       
     if (!empty($theme->settings->linkcolor)) {
        $linkcolor = $theme->settings->linkcolor;
    } else {
        $linkcolor = null;
    }
    $css = fusion_save_set_linkcolor($css, $linkcolor);

     if (!empty($theme->settings->customcss)) {
        $customcss = $theme->settings->customcss;
    } else {
        $customcss = null;
    }
    $css = fusion_save_set_customcss($css, $customcss);
    
    return $css;
    
    
    
}

