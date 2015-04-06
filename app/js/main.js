$(document).ready(function() {


    var a = "easeInOutCirc";

/* UNUSED WAIT THROUGH DEFER
    var wait = function(ms) {
        var defer = $.Deferred();
        setTimeout(function() { defer.resolve(); }, ms);
        return defer;
    };
*/
    var x = 945;
    var w = $(window).width();
    var o = 1280 - w;
    var m = 800 - w;
    console.log("m :" + m);
    if (w < 1280) {
        x = 945 - o;
        $('.menu-project').css('width', x);
        console.log("w: " + w);
    }
    var head = $('.mob-head').height();
    console.log("head :" + head);
    $('.mob-wrap').css('height', head + 67);

    $(window).resize(function(){
        if($(window).width()!=w){
            if (w < 1280 ) {
                var y = 945 - o;
                $('.menu-project').css('width', x);
            }
            location.reload();
        }
    });

    $('.mob-button').click(function(e) {
        e.preventDefault();
        var head2 = $('.mob-head').height();
        var mobWrap = $('.mob-wrap').height();
        var head2x = head2+68;
        var h = $('.mob-menu').height();
        var h2O = h + 70;
        console.log("head: " + head2);
        console.log("head + 67: " + head2x);
        console.log("mob menu + 70: " + h2O);
        console.log("mob wrap: " + mobWrap);
        if ($('.mob-wrap').height() == head2x) {
            $('.mob-wrap').delay(300)
                .queue( function(next){
                    $(this).animate({'height': h2O},300,a);
                    next();
                });
        } else {
            $('.mob-wrap').animate({'height': head2x},100,a);
        }



        if ($('.mob-menu').css('margin-top')== '-527px') {
            $('.mob-menu').css('display', 'block');
            $('.mob-menu').animate({'margin-top': '+=597'},500,a);
        } else {
            $('.mob-menu').animate({'margin-top': '-=597'},500,a);
            $('.mob-menu').delay(0)
                .queue( function(next){
                    $(this).css('display','none');
                    next();
                });
        }
    });

    $('.mob-back').click(function(e) {
        e.preventDefault();
        var head2 = $('.mob-head').height();
        var mobWrap = $('.mob-wrap').height();
        var head2x = head2+68;
        var h = $('.mob-menu').height();
        var h2O = h + 70;
        if ($('.mob-wrap').height() == head2x) {
            $('.mob-wrap').delay(300)
                .queue( function(next){
                    $(this).animate({'height': h2O},300,a);
                    next();
                });
        } else {
            $('.mob-wrap').animate({'height': head2x},100,a);
        }
        if ($('.mob-works').css('left')== 0 + 'px') {
            $('.mob-works').animate({'left': '+=' + w},500,a);
            $('.mob-menu').animate({'right': '-=' + w},500,a);
            $('.mob-back').animate({ opacity: 0 }, 800, a);
            $('.mob-button').delay(800)
                .queue( function(next){
                    $(this).css('display','block');
                    next();
                });
            $('.mob-button').animate({ opacity: 1 }, 800, a);
            $('.mob-back').delay(0)
                .queue( function(next){
                    $(this).css('display','none');
                    next();
                });
            $('.mob-wrap').css('height', 870);
        }
        if ($('.mob-project').css('left')== 0 + 'px') {
            $('.mob-project').animate({'left': '+=' + w},500,a);
            $('.mob-menu').animate({'right': '-=' + w},500,a);
            $('.mob-back').animate({ opacity: 0 }, 800, a);
            $('.mob-button').delay(800)
                .queue( function(next){
                    $(this).css('display','block');
                    next();
                });
            $('.mob-button').animate({ opacity: 1 }, 800, a);
            $('.mob-back').delay(0)
                .queue( function(next){
                    $(this).css('display','none');
                    next();
                });
            $('.mob-wrap').css('height', 870);
        }
    });

    $('.mob-works').css('left', w);
    $('#mob-works').click(function(e) {
        e.preventDefault();
        if (w < 800 ) {
            var z = 1170 - m;
            $('.mob-wrap').css('height', z);
        }
        if ($('.mob-works').css('left')== w + 'px') {

            $('.mob-menu').animate({'right': '+=' + w},500,a);
            $('.mob-works').animate({'left': '-=' + w},500,a);
            $('.mob-button').animate({ opacity: 0 }, 800, a);
            $('.mob-back').delay(800)
                .queue( function(next){
                    $(this).css('display','block');
                    next();
                });
            $('.mob-back').animate({ opacity: 1 }, 800, a);
            $('.mob-button').delay(0)
                .queue( function(next){
                    $(this).css('display','none');
                    next();
                });
        }
    });
    $('.mob-project').css('left', w);
    $('#mob-project').click(function(e) {
        e.preventDefault();
        if (w < 800 ) {
            var z = 1050 - (m * 0.1);
            $('.mob-wrap').css('height', z);
            console.log("z: " + z);
        }
        if ($('.mob-project').css('left')== w + 'px') {
            $('.mob-menu').animate({'right': '+=' + w},500,a);
            $('.mob-project').animate({'left': '-=' + w},500,a);
            $('.mob-button').animate({ opacity: 0 }, 800, a);
            $('.mob-back').delay(800)
                .queue( function(next){
                    $(this).css('display','block');
                    next();
                });
            $('.mob-back').animate({ opacity: 1 }, 800, a);
        }
    });

    $('#menu').click(function (e) {
            e.preventDefault();
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
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */