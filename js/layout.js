$(function() {
    /* mobile open menu */
    $('.menu .bar-mobile').click(function(){
        $('.menu-r').fadeToggle(300);
    });

    /* mobile close menu */
    $('.menu .menu-r-close, .container, footer').click(function(){
        if( $(window).width() < 821 ){
            $('.menu-r').fadeOut(300);
        }
    });

    /* open nav-second */
    $('.nav-second-open').click(function(){
        $(this).find('.nav-second').slideToggle(300);
    });

    /* close nav-second */
    $('.container, footer').click(function(){
        $('.nav-second').slideUp(300);
    });

    /* open popup */
    $('a.popup').click(function(){
        var id = $(this).attr('rel');
        $('#'+id).show();
    });

    /* close popup */
    $('.popup-theme .overlay-bg, .popup-close-x, .popup-close').click(function() {
        $(this).closest('.popup-theme').hide();
    });

    /* change panel */
    $('.tabs > a').click(function(){
        var id = $(this).attr('rel');
        $('.panel').not('.panel-'+id).hide();
        $('.panel-'+id).fadeIn(300);
    });
});