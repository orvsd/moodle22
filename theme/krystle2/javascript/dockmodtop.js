/**
 * This function modifies the dock as we want.
 * 
 * In our case we are choosing to extend the dock rather than modify it.
 * To do this we listen for a couple of the events that the dock fires and when
 * fired we make any changes we want.
 * 
 * The function itself gets called by the dock during its initialisation.
 * This means that you have access to everything the dock has.
 */
function customise_dock_for_theme() {
    var dock = M.core_dock;
    dock.cfg.position = 'left';
    dock.cfg.orientation = 'vertical';

}

