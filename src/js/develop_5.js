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
          swipeToSlide:true,
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
function tabs(){   //табчики закажите сайт
     $('.tabs li').click(function(event) {
        clearActive();
        var ind = $(this).index();
        addActive(ind,$('.list li'));
        addActive(ind,$('.notebook li'));
        changeImg(ind);
    });
     function addActive(ind,obj){
        obj.eq(ind).addClass('active');
     }
     function clearActive(){
        $('.list li').removeClass('active');
        $('.notebook li').removeClass('active');
     }
     function changeImg(ind){
        $('.screen img').removeClass('active');
        $('.screen img').eq(ind).addClass('active');
     }
}

function trollSlider() {
    var slider = $('.trollslider');
    var itemsCount = initSlider(slider);
    buildSlider(slider);
    $(document).on('click', '.trollslider .next', function(){
        next(slider);
    });
    $(document).on('click', '.trollslider .prev', function(){
        prev(slider);
    });
    function next(obj){
        $('.trollslider .slide-one').removeClass('nextAnim').removeClass('animNext').removeClass('animPrev').removeClass('prevAnim');
        var last = obj.find('.prev').removeClass('prev');
        obj.find('.active').removeClass('active').addClass('prev').addClass('nextAnim');
        obj.find('.next').removeClass('next').addClass('active').addClass('animNext').next().addClass('next');
        obj.append(last);
    }
    function prev(obj){
        $('.trollslider .slide-one').removeClass('nextAnim').removeClass('animNext').removeClass('animPrev').removeClass('prevAnim');
        obj.find('.next').removeClass('next');
        obj.find('.active').removeClass('active').addClass('next').addClass('prevAnim');
        obj.find('.prev').removeClass('prev').addClass('active').addClass('animPrev');
        var last = obj.find('.slide-one').eq(itemsCount);
        last.addClass('prev');
        obj.prepend(last);

    }
    function buildSlider(obj){
        var last = obj.find('.slide-one').eq(itemsCount);
        last.addClass('prev');
        obj.prepend(last);
        obj.find('.active').next().addClass('next');
    }
    function initSlider(obj){
        if(!obj.hasClass('sliderInited')) {
            var ind = 0;
            obj.find('.slide-one').each(function () {
                if (!$(this).hasClass('initialized')) {
                    if (ind == 0) {
                        obj.find('.slide-one').removeClass('active');
                        $(this).addClass('active');
                    }
                    $(this).addClass('initialized');
                    $(this).attr('data-id', ind);
                }
                ind++;
            });
            obj.addClass('sliderInited');
            return --ind;
        }
    }
}
function trollSliderSlickInit(){
    if($(window).width()<=1280 - $.scrollbarWidth()){
        console.log('starr');
        $('.trollslider').slick({

            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 2000,
            swipeToSlide:true

        });
    }
}
function scrollForActive(){
    $(window).scroll(function(event) {

        var scrolltop = $(window).scrollTop()+$('header').outerHeight()+140;

        $('.main section').each(function(index, el) {
            if($(this).offset().top <= scrolltop && $(this).offset().top+$(this).outerHeight()>scrolltop){
                var sectID = '#'+$(this).attr('id');
                console.log(sectID);
                var notAct = true;
                $('header li a').each(function(){
                    var ahid = $(this).attr('href');
                    if(ahid == sectID){$('header li a').removeClass('active'); notAct = false; $(this).addClass('active');console.log('%c!!!match','background-color:green');}else{console.log('%c not-match','background-color:red');}
                });
                if(notAct == true){$('header li a').removeClass('active');}

            }
        });
    });
}
$(document).ready(function(){
    hoverElem();
    sliderInit();
    changeBg();
    tabs();
    if($(window).width()>1280 - $.scrollbarWidth()) {
        trollSlider();
    }
    trollSliderSlickInit();
    $('.third-wrap .item.active .button').click(function (event) {
        $('.call-phone').click();
        return false;
    });
    scrollForActive();
});

$(window).load(function(){

});

$(window).resize(function(){
    hoverElem();
    
});