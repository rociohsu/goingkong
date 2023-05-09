$(function() {
    /* mobile open menu */
    $('.menu .bar-mobile').click(function(){
        $('.menu-r').fadeIn(300);
    });

    /* mobile close menu */
    $('.menu .menu-r-close').click(function(){
        $('.menu-r').fadeOut(100);
    });
});