
// get material design colors

function getMaterialDesignColors(){

    var colorsObject = {};

    if($('.mdl-color--primary').length){
        colorsObject.primary = $('.mdl-color--primary').css('background-color');
    }else if($('.mdl-color-text--primary').length){
        colorsObject.primary = $('.mdl-color-text--primary').css('color');
    }

    if($('.mdl-color--accent').length){
        colorsObject.accent = $('.mdl-color--accent').css('background-color');
    }else if($('.mdl-color-text--accent').length){
        colorsObject.accent = $('.mdl-color-text--accent').css('color');
    }

    return colorsObject;

}

// /get material design colors

// header telefone hover

function headerTelefoneHover(hoverColor){

    $('.header-telefone').hover(
        function(){
            $(this).find('.telefone-number-wrap').css('color', hoverColor);
        },
        function(){
            $(this).find('.telefone-number-wrap').removeAttr('style');
        }
    );

}

// /header telefone hover

$(document).ready(function(){



});

$(window).load(function(){

    var colorsObject = getMaterialDesignColors();

    headerTelefoneHover(colorsObject.accent);

});

$(window).resize(function(){

});