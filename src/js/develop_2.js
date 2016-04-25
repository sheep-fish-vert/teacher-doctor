


$(document).ready(function () {
    /*
    $('.super-label').click(function () {
        $(this).addClass('translator');
    });
*/
    $("input").focusin(function () { 
        $(this).closest('.form_input').find('.super-label').addClass('translator');
    });
    $("input").focusout(function () { 
        if ( $(this).val() == '' || $(this).val().indexOf("_") !=-1 ) {
            $(this).closest('.form_input').find('.super-label').removeClass('translator');
        }        
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});