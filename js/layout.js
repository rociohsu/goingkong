$(function() {
    /* mobile open menu */
    $('.menu .bar-mobile').click(function(){
        $('.menu-r').fadeToggle(300);
    });

    /* mobile close menu */
    $('.menu .menu-r-close, .container, footer').click(function(){
        $('.menu-r').fadeOut(300);
    });

    /* open nav-second */
    $('.nav-second-open').click(function(){
        $(this).find('.nav-second').slideToggle(300);
    });

    /* close nav-second */
    $('.container, footer').click(function(){
        $('.nav-second').slideUp(300);
    });
});