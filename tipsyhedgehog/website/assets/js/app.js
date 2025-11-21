console.log("attached");
jQuery(document).ready(function ($) {

    let $toggleButton = $(".top-menu-block .menu-toggle-button");
    let $menuContainer = $(".top-menu-block .inner-row.menu-container");
    let $topMenuBlock = $(".top-menu-block");
    let $toggleButtonOnHomePage = $(".home .top-menu-block .menu-toggle-button");

    function openPageTopMenu() {
        $toggleButton.addClass("menu-is-open");
        $topMenuBlock.addClass("menu-is-open");
        $menuContainer.slideDown();
    }
    function closePageTopMenu() {
        $toggleButton.removeClass("menu-is-open");
        $topMenuBlock.removeClass("menu-is-open");
        $menuContainer.slideUp();
    }
    $toggleButton.on("click", function() {
        console.log($toggleButton);
        if($toggleButton.hasClass("menu-is-open")) {
            closePageTopMenu();
        } else {
            openPageTopMenu();
        }
    });
    $(document).on('keydown', function (e) {
        if (e.key === "Escape") {
            if($toggleButton.hasClass("menu-is-open")) {
                closePageTopMenu();
            }
        }
    });

    if($toggleButtonOnHomePage) {
        $(window).on("load scroll resize", function() {
            if($(window).scrollTop() > 250) {
                $toggleButton.addClass("scrolled");
            } else {
                $toggleButton.removeClass("scrolled");
            }
        });
    }

});