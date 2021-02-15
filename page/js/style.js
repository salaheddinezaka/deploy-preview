$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('nav').toggleClass('visible');
    });
    $('.blog-categories .container').slick({
        dots:false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4,
                variableWidth: false
              }
            },
            {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 3,
                  variableWidth: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                  slidesToShow: 2,
                  variableWidth: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  variableWidth: false
                }
            }
        ]
    });
});

$(window).resize(function(){
    if($(window).width() > 1080){
        $('.hamburger').removeClass('is-active');
        $('nav').removeClass('visible');
    }
});