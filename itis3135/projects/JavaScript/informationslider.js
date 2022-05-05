$(document).ready(function() {
    $(document).ready(function() {
        $("#slider").bxSlider({
            randomStart: true,
            moveSlides: 1,
            auto: true,
            minSlides: 0,
            maxSlides: 1,
            slideWidth: 500,
            slideMargin: 20,
            captions:true,
            pause:3000,
            pager:true,
            pagerSelector: '#id_pager',
            pagerType: "short",
            adaptiveHeight:true
        });
    });
   
   
    /* $(function(){
        $('#slider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 600,
          shrinkItems: false
        });
      });*/
   /* $("#slider").bxSlider({
        randomStart: true,
        moveSlides: 1,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 532,
      
        captions:true,
       
    });*/
});
