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

function elevenBlockSlider(){
    $('.eleven-block-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        //autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide:true,
        arrows: true,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>'
    });
}


$(document).ready(function(){
    elevenBlockSlider();
    topBlockSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});
