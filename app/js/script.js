"use strict"

const button = document.querySelector('.welcome__button');



button.addEventListener ('mouseover', function() {
   button.style.width = "60%";
   button.style.height = "20%";
   console.log('my to');
});

button.addEventListener ('mouseout', function() {
    button.style.width = "46%";
    button.style.height = "9%";
 });

 // Slider
// Czemu showSlides jest tutaj bez let ani var? nie rozumiem

 let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


