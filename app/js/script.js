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