
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

// diagram scripts

    function diagramScripts(){

        function circlesBlockHeight(){

            var mboxHalfWidth = parseInt($('.nine-block .mbox').width())/2;

            $('.like-svg-graf').height(mboxHalfWidth);

        }


        circlesBlockHeight();

        $(window).load(function(){

            circlesBlockHeight();

        });

        $(window).resize(function(){

            circlesBlockHeight();

        });

    }

// /diagram scripts

$(document).ready(function(){

    diagramScripts();

});

$(window).load(function(){

    var colorsObject = getMaterialDesignColors();

    headerTelefoneHover(colorsObject.accent);

});

$(window).resize(function(){

});