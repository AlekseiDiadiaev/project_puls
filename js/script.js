$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 700,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/slide_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/slide_right.png"></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: true,
                arrows: false
              }
            }  
          ]
      });
  });



