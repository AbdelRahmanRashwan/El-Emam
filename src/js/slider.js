import "./jssor.slider.min.js"  ;

declare var $Jssor$;
declare var $JssorSlider$;
declare var $JssorEasing$;
declare var $JssorSlideshowFormations$;
declare var $JssorSlideshowRunner$;
declare var $JssorBulletNavigator$;
declare var $JssorArrowNavigator$;
declare var $JssorThumbnailNavigator$;
declare var $JssorCaptionSlideo$;
export const jssor_1_slider_init = function (size) {

    var jssor_1_options = {
        $AutoPlay: 1,
        //slider centered unit width
        $SlideWidth: size,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 1366;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};