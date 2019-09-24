
$(document).ready(function() { 

    $('.menu').click(function() {
        $('.header-nav .nav ul').toggleClass('on_menu');
         $('.menu-line').addClass('menu-line-of').removeClass('menu-line');
         $('.menu-align-line').addClass('menu-align-line-of').removeClass('menu-align-line');
         $('.logo').toggle();
    });
        $('.header-nav .nav ul li').click(function() {
        $('.header-nav .nav ul').toggleClass('on_menu');
        $('.menu-line-of').addClass('menu-line').removeClass('menu-line-of');
        $('.menu-align-line-of').addClass('menu-align-line').removeClass('menu-align-line-of');
        $('.logo').toggle();
     });
   
});