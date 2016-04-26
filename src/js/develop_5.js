var imgs = $('.img-box .image');
function hoverElem(){
    if($(window).width()>1280 - $.scrollbarWidth()){
        var container = $('.five-block .conent');
        var windW = $(window).width();
        var contW = container.width();
        var slide = ((contW - windW)/2)*-1;
        var itemsCount = $('.five-block .item').length;
        var coefSlide = 100 / itemsCount;
        if(windW<contW){animateContainer(slide);}

        $(document).on('mouseover', '.five-block .item', function(e) {
            imgs.removeClass('default');
            var ind = $(this).index();
            imgs.eq((ind+1)).addClass('default');
            if (ind>(itemsCount/2)){ind = ind+1;}
            slide = (((contW - windW)/100)*(ind * coefSlide))*-1;
            animateContainer(slide);
        });
    }
    function animateContainer(count){
        container.css('transform','translate3d('+count+'px, 0, -10px)');
    }
}
function sliderInit(){

    if($(window).width()<=1280 - $.scrollbarWidth()){
        console.log('starr');
        $('.five-block .conent').slick({
          infinite: true,
           centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
            arrows:false,
          autoplay: true,
            autoplaySpeed: 2000,
          adaptiveHeight: true,
          responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
    }
}
function changeBg(){
    $('.five-block .conent').on('afterChange', function(slick, currentSlide){
        var elements = document.querySelectorAll('.five-block .conent .item');
        var ind;
        for (var i = 0; i < elements.length; i++) {
            if($(elements[i]).hasClass('slick-current')){
                ind = $(elements[i]).attr('data-slick-index');
                imgs.removeClass('default');
                imgs.eq(ind).addClass('default');
            }
        }


    });
}
$(document).ready(function(){
    hoverElem();
    sliderInit();
    changeBg();
});

$(window).load(function(){

});

$(window).resize(function(){
    hoverElem();
    if($(window).width()>1280 - $.scrollbarWidth()){
        $('.five-block .conent').slick('unslick');
    }
});