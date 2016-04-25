


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

    $(document).on('click touchstart', function (event) {
        if ($('.after-frorm').hasClass('active-form') && !$('.after-frorm ').is(event.target) && $('.after-frorm ').has(event.target).length === 0 && !$('.call-phone').is(event.target) && $('.call-phone').has(event.target).length === 0) {
            $('.header').removeClass('hide-hipe');
            $('.main').removeClass('hide-hipe');
            $('.after-frorm').removeClass('active-form');
        }
    });

    $('.call-phone').click(function () {
        if ($('.after-frorm').hasClass('active-form')) {
            $('.header').removeClass('hide-hipe');
            $('.main').removeClass('hide-hipe');
            $('.after-frorm').removeClass('active-form');
        } else {
            $(this).closest('.super-button').find('.after-frorm').addClass('active-form');
            $('.header').addClass('hide-hipe');
            $('.main').addClass('hide-hipe');
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