$(document).ready(function() {


    var a = "easeInOutCirc";

    $.wait = function(ms) {
        var defer = $.Deferred();
        setTimeout(function() { defer.resolve(); }, ms);
        return defer;
    };

    var x = 945;
    var w = $(window).width();
    var o = 1280 - w;
    if (w < 1280) {
        x = 945 - o;
        $('.menu-project').css('width', x);
        console.log("w: " + w);
    }

    $(window).resize(function(){
        if($(window).width()!=w){
            //execute code.
            if (w < 1280) {
                y = 945 - o;
            }
        }
        $('.menu-project').css('width', x);
        console.log("x0: " + y);
        location.reload();
    });


    $('#menu').click(function () {
            $('.menu-content').css('display', 'block');
            $('.menu-content').animate({'margin-left': '+=263'},500, a);
            $('.home-head').animate({'margin-left': '+=263'},500, a);
            $('.menu-button-closed').animate({ opacity: 0 }, 800, a);
            $('.menu-button-closed').css('display', 'none');
            $('.menu-button-open').css('display', 'block');
            $('.menu-button-open').animate({ opacity: 1 }, 800, a);
            $('.logo-stripe').animate({ opacity: 0 }, 800, a);

    });

    $('#cross').click(function (e) {
        e.preventDefault();
            $('.menu-content').animate({'margin-left': '-=263'},500, a);
            $('.menu-content').delay(500)
                .queue( function(next){
                    $(this).css('display','none');
                    next();
                });
            $('.home-head').animate({'margin-left': '-=263'},500, a);
            $('.menu-button-open').animate({ opacity: 0 }, 800, a);
            $('.menu-button-open').css('display', 'none');
            $('.menu-button-closed').css('display', 'block');
            $('.menu-button-closed').animate({ opacity: 1 }, 800, a);
            $('.logo-stripe').animate({ opacity: 1 }, 800, a);
             if ($('.menu-project').css("margin-left")=='0px') {
                 $('.menu-project').animate({'margin-left': '-=945'}, 500, a);
                 $('.menu-menu li').removeClass('active');
                 $('.menu-project').delay(500)
                     .queue( function(next){
                         $(this).css('display','none');
                         next();
                     });
             }
            if ($('.menu-works').css("margin-left")=='0px') {
                $('.menu-works').animate({'margin-left': '-=250'}, 500, a);
                $('.menu-menu li').removeClass('active');
                $('.menu-works').delay(500)
                    .queue( function(next){
                        $(this).css('display','none');
                        next();
                    });
            }
    });

    $('#works').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active') ) {
            $('.menu-works').animate({'margin-left': '-=250'},500, a);
            $(this).removeClass('active');
            $('.menu-works').delay(500)
                .queue( function(next){
                    $(this).css('display','none');
                    next();
                });
        } else {
            if ($('.menu-project').css("margin-left")=='0px') {
                $('.menu-project').animate({'margin-left': '-=945'}, 500, a);
                $('.menu-project').delay(0)
                    .queue( function(next){
                        $(this).css('display','none');
                        next();
                    });
                $('#project').removeClass('active');
                $(this).addClass('active');
                $('.menu-works').delay(500)
                    .queue( function(next){
                        $(this).css('display','block');
                        next();
                    });
            } else {
                $('.menu-works').css('display','block');
            }
            $('.menu-works').animate({'margin-left': '+=250'},500, a);
            $(this).addClass("active");
        }
    });
    $('#project').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active') ) {
            $('.menu-project').animate({'margin-left': '-=945'},500, a);
            $(this).removeClass('active');
            $('.menu-project').delay(500)
                .queue( function(next){
                    $(this).css('display','none');
                    next();
                });
        } else {
            if ($('.menu-works').css("margin-left")=='0px') {
                $('.menu-works').animate({'margin-left': '-=250'}, 500, a);
                $('#works').removeClass('active');
                $(this).addClass('active');
                $('.menu-project').delay(500)
                    .queue( function(next){
                        $(this).css('display','block');
                        next();
                    });
            } else {
                $('.menu-project').css('display','block');
            }
            $('.menu-project').animate({'margin-left': '+=945'},500, a);
            $(this).addClass("active");
        }
    });
});