function topBlockSlider(){
    $('.top-block-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    });
}


$(document).ready(function(){
    topBlockSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});
