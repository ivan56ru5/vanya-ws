'use strict';

const menuButton = document.querySelector('.m-menu-button');
const menu = document.querySelector('.m-menu');
const cards = document.querySelectorAll('.card-discr');

console.log(cards)
//прокрутка и меню
menuButton.addEventListener('click', () => {
  menu.classList.toggle ('active');
  if (menu.classList.contains('active')){ 
  document.body.style.overflow = 'hidden'; 
}
  else {document.body.style.overflow = 'auto';}
}
);

//слайдер

function width () {
if (document.documentElement.clientWidth < 768) {
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.add("item");
}}
}
width ();

var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('item');
  let dots = document.getElementsByClassName('slider-dots_item');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}