// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
//document.documentElement.style.setProperty('--vh', `${vh}px`);

$(function() {
    /* mobile open menu */
    $('.menu .bar-mobile').click(function(){
        $('.menu-r.current').fadeToggle(300);
        $('html').css('overflow','hidden');
    });

    /* mobile close menu */
    $('.menu .menu-r-close, .container, footer').click(function(){
        if( $(window).width() < 821 ){
            $('.menu-r.current').fadeOut(300);
            $('html').css('overflow','inherit');
        }
    });

    /* open nav-second */
    $('.nav-second-open').click(function(){
        $('.nav-second-open').not(this).find('.nav-second').slideUp(300);
        $(this).find('.nav-second').slideToggle(300);
    });

    /* close nav-second */
    $('.container, footer').click(function(){
        $('.nav-second').slideUp(300);
    });

    /* 展開右上方user選單(僅電腦版) */
    if( $(window).width() > 820 ){
        //$('.menu-r.current').hide();

        /* open user-menu */
        $('.menu-r').not('.current').find('.user-pic').click(function(){
            $('.menu-r.current').slideDown(500);
        });
    
        /* close user-menu */
        $('.menu-r-close, .container, footer').click(function(){
            $('.menu-r.current').slideUp();
        });
    }

    /* open popup */
    $('a.popup').click(function(){
        var id = $(this).attr('rel');
        $('#'+id).show();
        $('html').css('overflow','hidden');
    });

    /* close popup */
    $('.popup-theme .overlay-bg, .popup-close-x, .popup-close').click(function() {
        $(this).closest('.popup-theme').hide();
        $('html').css('overflow','inherit');
    });

    /* change panel */
    $('.tabs > a').click(function(){
        var id = $(this).attr('rel');
        $('.tabs > a').removeClass('current');
        $(this).addClass('current');
        $('.panel').removeClass('current');
        $('.'+id).addClass('current');
    });
});