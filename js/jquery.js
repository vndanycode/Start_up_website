$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let header__inner = $("#header__inner");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header__inner.addClass("fixed");
        } else {
            header__inner.removeClass("fixed");
        }
    });

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show")
    })

});




