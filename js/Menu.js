$(function() {

    var BTN = $("#BLACK h6");
    var MENU = $("#MENU");
    var DOCUMENT = $(document);

    BTN.on("touchstart click", AAA);

	
    function AAA(e) {
        MENU.show();
        MENU.on("touchstart click", BBB);
        var WW = DOCUMENT.innerWidth();
        var HH = DOCUMENT.innerHeight();
        MENU.css({ width: WW, minHeight: HH });
        e.stopImmediatePropagation();
        e.preventDefault();
    }

    
    $(window).on("resize", function() {
        MENU.attr("style", "");
    });

});