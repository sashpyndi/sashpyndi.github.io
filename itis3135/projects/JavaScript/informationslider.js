$(document).ready(function () {
    $(document).ready(function () {
        $("#slider").bxSlider({
            randomStart: true,
            moveSlides: 1,
            auto: true,
            minSlides: 0,
            maxSlides: 1,
            slideWidth: 500,
            slideMargin: 20,
            captions: true,
            pause: 3000,
            pager: true,
            pagerSelector: '#id_pager',
            pagerType: "short",
            adaptiveHeight: true
        });
    });
});
