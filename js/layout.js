// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(function() {
    /* mobile open menu */
    $('.menu .bar-mobile').click(function(){
        $('.menu-r').fadeToggle(300);
        $('html').css('overflow','hidden');
    });

    /* mobile close menu */
    $('.menu .menu-r-close, .container, footer').click(function(){
        if( $(window).width() < 821 ){
            $('.menu-r').fadeOut(300);
            $('html').css('overflow','inherit');
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

    if( $(window).width() > 820 ){
        /* open user-menu */
        $('.user-pic').click(function(){
            $('.menu-r').addClass('current');
        });

        /* close user-menu */
        $('.menu-r-close, .container, footer').click(function(){
            $('.menu-r').removeClass('current');
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