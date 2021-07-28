'use strict';

const buttons = document.querySelectorAll('[data-direction]');

const selectedDirection = 'top to right';
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(btn.dataset.direction);
    buttons.forEach((btn) => {
      btn.childNodes[1].children[0].removeAttribute(
        'class',
        'selectedDirection'
      );
    });
    btn.childNodes[1].children[0].setAttribute('class', 'selectedDirection');
  });
});
