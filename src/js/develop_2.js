

 var flagShtock = true; 
$(document).ready(function () {

    $('.spec-border').css("border-color",$('.mdl-color--accent').css('background-color') );
    
    $("input").focusin(function () {
        $(this).closest('.form_input').find('.super-label').addClass('translator');
    });
    
    $("input").focusout(function () {
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
            setTimeout(function () { flagShtock = true }, 1000);
        }         
    });

    $('form').find('button').prop("disabled", true);
    $('form').find('button').addClass('doesnotuse');

    $('input').on('change', function () {
        if ($(this).val() != '' || $(this).val().indexOf("_") != -1) {
            $(this).closest('form').find('button').prop("disabled", false);
            $(this).closest('form').find('button').removeClass('doesnotuse');
        }
    });
    


});

$(window).load(function () {

});

$(window).resize(function () {

});