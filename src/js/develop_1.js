
// get material design colors

function getMaterialDesignColors(){

    var colorsObject = {};

    if($('.mdl-color--primary').length){
        colorsObject.primary = $('.mdl-color--primary').css('background-color').match(/\d+/g);
    }else if($('.mdl-color-text--primary').length){
        colorsObject.primary = $('.mdl-color-text--primary').css('color').match(/\d+/g);
    }

    if($('.mdl-color--accent').length){
        colorsObject.accent = $('.mdl-color--accent').css('background-color').match(/\d+/g);
    }else if($('.mdl-color-text--accent').length){
        colorsObject.accent = $('.mdl-color-text--accent').css('color').match(/\d+/g);
    }

    return colorsObject;

}

// /get material design colors

// header telefone hover

    function headerTelefoneHover(hoverColor){

        $('.header-telefone').hover(
            function(){
                $(this).find('.telefone-number-wrap').css('color', 'rgb(' + hoverColor[0] + ', ' + hoverColor[1] + ', ' + hoverColor[2] + ')');
            },
            function(){
                $(this).find('.telefone-number-wrap').removeAttr('style');
            }
        );

    }

// /header telefone hover

// diagram scripts

    function diagramScripts(colorsObject){

        // block height for circles in diagram

            function circlesBlockHeight(colorsObject){

                var mboxHalfWidth = parseInt($('.nine-block .mbox').width())/2;

                $('.like-svg-graf').height(mboxHalfWidth);

            }

        // /block height for circles in diagram

        // diagram circles color from material design styles

            function diagramColors(){

                var colorR = parseInt(colorsObject.accent[0]);
                var colorG = parseInt(colorsObject.accent[1]);
                var colorB = parseInt(colorsObject.accent[2]);

                var changePointR = (colorR/2)/$('.inside-circle').length;
                var changePointG = (colorG/2)/$('.inside-circle').length;
                var changePointB = (colorB/2)/$('.inside-circle').length;

                var zIndex = $('.inside-circle').length;

                $('.inside-circle').each(function(index, el) {

                    $(this).css({'background-color':'rgb(' + colorR + ', '+ colorG +',' + colorB + ')'});
                    colorR = parseInt(colorR - changePointR);
                    colorG = parseInt(colorG - changePointG);
                    colorB = parseInt(colorB - changePointB);

                    $(this).parent().css({'z-index':zIndex});
                    zIndex--;

                });

            }

        // /diagram cirlces color from material design styles

        // if more text show scroll arrow

            function addOrRemoveArrow(){

                $('.like-svg-description li').each(function(index, el) {

                    var textWrap = $(this).find('.descript-text-main');
                    var textOverflow = $(this).find('.descript-text');

                    if(textWrap.height() > textOverflow.height()){

                        textOverflow.addClass('scroll');

                    }else{

                        textOverflow.removeClass('scroll');

                    }

                });

            }

        // /if more text show scroll arrow

        // diagram function calling

        circlesBlockHeight();
        diagramColors();
        addOrRemoveArrow();

        $(window).load(function(){

            circlesBlockHeight();
            addOrRemoveArrow();

        });

        $(window).resize(function(){

            circlesBlockHeight();
            addOrRemoveArrow();

        });

        // /diagram function calling

    }

// /diagram scripts

$(document).ready(function(){

    var colorsObject = getMaterialDesignColors();

    headerTelefoneHover(colorsObject.accent);

    diagramScripts(colorsObject);

});

$(window).load(function(){




});

$(window).resize(function(){

});