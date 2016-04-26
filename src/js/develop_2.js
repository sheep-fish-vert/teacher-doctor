
var specColor;
var flagShtock = true;
var map;

function googleMap(mapWrap) {
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX, cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            scaleControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var contentString = '<div class="marker-test">' + googleText + '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });


        /*маркер на svg*/
        //  var SQUARE_PIN = 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z';
        //больше - http://map-icons.com/
        /*/маркер на svg*/

        //var image = 'images/footer-contact-marker.png';   // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP // анимация при загрузке карты
            //icon: image //  иконка картинкой
            /* icon: {                               //маркер на svg
                 path: SQUARE_PIN,
                 fillColor: '#fff',
                 fillOpacity: 0.7,
                 strokeColor: '#FF3232',
                 strokeWeight: 5
             },
             */
        });

        /*анимация при клике на маркер*/
        marker.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        /*/анимация при клике на маркер*/

        /*По клику открываеться инфоблок*/
        /*
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });
        */
    }
    initialize();
}

$(document).ready(function () {

    specColor = $('.mdl-color--accent').css('background-color');

    /* forms */
    $('.spec-border').css("border-color", specColor);

    $("input, textarea").focusin(function () {
        $(this).closest('.form_input').find('.super-label').addClass('translator');
    });

    $("input, textarea").focusout(function () {
        if ($(this).val() == '' || $(this).val().indexOf("_") != -1) {
            $(this).closest('.form_input').find('.super-label').removeClass('translator');
        }
    });

    $('.header-telefone').click(function () {
        $(this).find('.after-frorm').addClass('active-form-header');
    });

    $(document).on('click touchstart', function (event) {
        if ($('.after-frorm').hasClass('active-form') && !$('.after-frorm ').is(event.target) && $('.after-frorm ').has(event.target).length === 0 && !$('.call-phone').is(event.target) && $('.call-phone').has(event.target).length === 0) {
            $('.header').removeClass('hide-hipe');
            $('.main').removeClass('hide-hipe');
            $('.after-frorm').removeClass('active-form');
        }

        if ($('.after-frorm').hasClass('active-form-header') && !$('.after-frorm ').is(event.target) && $('.after-frorm ').has(event.target).length === 0 && !$('.header-telefone').is(event.target) && $('.header-telefone').has(event.target).length === 0) {
            $('.after-frorm').removeClass('active-form-header');
        }

    });


    $('.call-phone').click(function () {
        if (flagShtock) {
            flagShtock = false;
            if ($('.after-frorm').hasClass('active-form')) {

                $('.header').removeClass('hide-hipe');
                $('.main').removeClass('hide-hipe');
                $('.after-frorm').removeClass('active-form');

            } else {
                $(this).closest('.super-button').find('.after-frorm').addClass('active-form');
                $('.header').addClass('hide-hipe');
                $('.main').addClass('hide-hipe');
            }
            setTimeout(function () { flagShtock = true; }, 1000);
        }
    });

    $('form').find('button').prop("disabled", true);
    $('form').find('button').addClass('doesnotuse');


    $('input').on('change', function () {
        if (!$(this).closest('form').hasClass('form-twelwe')) {
            if ($(this).val() != '' || $(this).val().indexOf("_") != -1) {
                $(this).closest('form').find('button').prop("disabled", false);
                $(this).closest('form').find('button').removeClass('doesnotuse');
            } else { 
                $('form').find('button').prop("disabled", true);
                $('form').find('button').addClass('doesnotuse');
            }
        } else { 
            if (($('#name-tw').val() != '') && ($('#email-tw').val() != '') && ($('#area-tw').val() != '')) {
                $(this).closest('form').find('button').prop("disabled", false);
                $(this).closest('form').find('button').removeClass('doesnotuse');
            } else { 
                $('form').find('button').prop("disabled", true);
                $('form').find('button').addClass('doesnotuse');
            }
        }

    });
    /* form */

    /* ten hover block */

    $('.ten-block .item').hover(function () {
        if ($(this).index() === 0) {
            $(this).find('.convert').css('border-color', specColor);
            $(this).find('.sup').css('background-color', specColor);
            $(this).find('.plank').css('background-color', specColor);
            $(this).find('.sup').find('i').css('color', 'white');
        }
        if ($(this).index() == 1) {
            $(this).find('.convert').css('border-color', specColor);
            $(this).closest('.row-conteiner').find('.item').eq(0).find('.convert').css('border-color', specColor);
            $(this).find('.sup').css('background-color', specColor);
            $(this).closest('.row-conteiner').find('.item').eq(0).find('.sup').css('background-color', specColor);

            $(this).find('.sup').find('i').css('color', 'white');
            $(this).closest('.row-conteiner').find('.item').eq(0).find('.sup').find('i').css('color', 'white');
            $(this).find('.plank').css('background-color', specColor);
        }
        if ($(this).index() == 2) {
            $(this).find('.convert').css('border-color', specColor);
            $(this).closest('.row-conteiner').find('.item').eq(0).find('.convert').css('border-color', specColor);
            $(this).closest('.row-conteiner').find('.item').eq(1).find('.convert').css('border-color', specColor);
            $(this).find('.sup').css('background-color', specColor);
            $(this).closest('.row-conteiner').find('.item').eq(0).find('.sup').css('background-color', specColor);
            $(this).closest('.row-conteiner').find('.item').eq(1).find('.sup').css('background-color', specColor);
            $(this).find('.sup').find('i').css('color', 'white');
            $(this).closest('.row-conteiner').find('.item').eq(0).find('.sup').find('i').css('color', 'white');
            $(this).closest('.row-conteiner').find('.item').eq(1).find('.sup').find('i').css('color', 'white');
            $(this).closest('.row-conteiner').find('.item').eq(1).find('.plank').css('background-color', specColor);
            $(this).find('.plank').css('background-color', specColor);
        }

    },
        function () {
            $('.item').find('.convert').css('border-color', '#afafaf');
            $('.item').find('.sup').css('background-color', 'white');
            $('.item').find('.plank').css('background-color', '#afafaf');
            $('.item').find('.sup').find('i').css('color', '#afafaf');
        });


    /* ten hover block */

    /* map */
    googleMap('map');


    if ($(window).width() < 768) {
        map.set('draggable', false);
    }
    else {
        map.set('draggable', true);
    };
    /* map */


});




$(window).load(function () {

});

$(window).resize(function () {
    if ($(window).width() < 768) {
        map.set('draggable', false);
    }
    else {
        map.set('draggable', true);
    };

});