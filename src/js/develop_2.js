


$(document).ready(function () {
    $("input").focusin(function () { 
        $(this).closest('.form_input').find('.super-label').addClass('translator');
    });
    $("input").focusout(function () { 
        if ( $(this).val() == '' || $(this).val().indexOf("_") !=-1 ) {
            $(this).closest('.form_input').find('.super-label').removeClass('translator');
        }        
    });

    $('.call-phone').click(function () { 
        $(this).closest('.super-button').find('.after-frorm').addClass('active-form');
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});