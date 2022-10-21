$(function(){

  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  
  $('.blog__slider').slick({
    arrows: false,
    dots: true
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
  
  
  var mixer = mixitup('.galery__foto');
}); 