/* ===== Zeste de Savoir ====================================================
   Author: Alex-D
   ---------------------------------
   Accordeon for sidebar
   ========================================================================== */

(function($){
    "use strict";
    
    $(".main .sidebar.accordeon, .main .sidebar .accordeon").each(function(){
        var $that = this;

        $("h4 + ul", $that).each(function(){
            if($(".current", $(this)).length === 0)
                $(this).hide();
        });

        $("h4", $that).click(function(e){
            $("+ ul", $(this)).slideToggle(100);

            e.preventDefault();
            e.stopPropagation();
        });
    });
})(jQuery);