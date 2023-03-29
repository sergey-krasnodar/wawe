$(function(){

  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  
  $('.blog__slider').slick({
    arrows: true,
    dots: true
  });

  var mixer = mixitup('.galery__foto');
});

// ========================= Бургер-меню ==========================

const menuList = document.querySelector('.menu__list'); 
const btnBurger = document.querySelector('.menu-burger'); 
const menuItem = document.querySelectorAll('.menu__item'); 

btnBurger.addEventListener('click', function () {
  menuList.classList.toggle('menu__list--active');
  if (menuList.classList.contains('menu__list--active')) {
    btnBurger.classList.add('open');
  } else {
    btnBurger.classList.remove('open');
  }
});

menuItem.forEach(link => {
  link.addEventListener('click', () => {
    btnBurger.classList.remove('open');
    menuList.classList.remove('menu__list--active');
  })
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('active');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anime');
for (let elm of elements) {
  observer.observe(elm);
}