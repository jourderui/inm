$(document).ready(function() {

    $('#menu').click(function () {
            var e = "easeInOutCirc";
            $('.menu-content').animate({'margin-left': '+=263'},500, e);
            $('.menu-stripe').animate({'margin-left': '+=263'},500, e);
            $('.home-head').animate({'margin-left': '+=263'},500, e);
            $('.menu-button-closed').css('display', 'none');
            $('.menu-button-open').css('display', 'block');
            $('.logo-stripe').css('display', 'none');
    });

    $('#cross').click(function () {
            var e = "easeInCirc";
            $('.menu-content').animate({'margin-left': '-=263'},500, e);
            $('.menu-stripe').animate({'margin-left': '-=263'},500, e);
            $('.home-head').animate({'margin-left': '-=263'},500, e);
            $('.menu-button-closed').css('display', 'block');
            $('.menu-button-open').css('display', 'none');
            $('.logo-stripe').css('display', 'block');

    });
});