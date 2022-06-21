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
  // Валидация 
  function validateForms(form){   
    $(form).validate({
      rules: {
          name: {
              required: true,
              minlength: 2
          },
          phone: "required",
          email: {
              required: true,
              email: true
          }
      },
      messages: {
          name: {
              required: "Пожалуйста, введите свое имя",
              minlength: jQuery.validator.format("Введите минимум {0} символа!")
            },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты"
          }
      }
    }); 
  } 
  validateForms("#consultation__form1"); 
  validateForms("#consultation__form2"); 
  validateForms("#consultation__form3"); 
// Маска на ввод телефона  
    $('[name=phone]').mask("+3 (999) 999-99-99");

});



