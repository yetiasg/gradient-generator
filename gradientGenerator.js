'use strict';

const fetchColors = () => {
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  return { color1, color2 };
};

let direction = 'to right bottom';

const buttons = document.querySelectorAll('[data-direction]');
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    direction = btn.dataset.direction;
    //change arrow color
    buttons.forEach((button) => {
      clearArrowColor(button);
    });
    changeArrowColor(btn);
  });
});

const clearArrowColor = (btn) => {
  btn.childNodes[1].children[0].removeAttribute('class', 'selectedDirection');
};

const changeArrowColor = (btn) => {
  btn.childNodes[1].children[0].setAttribute('class', 'selectedDirection');
};

const generateGradient = (direction, { color1, color2 }) => {
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
};

const changeBackgroundGradient = (gradientValue) => {
  const gradientSection = document.querySelector('.gradient');
  gradientSection.style.backgroundImage = gradientValue;
};

const updateBackgroundValueDisplay = (gradientValue) => {
  const outputGradient = document.querySelector('.outputGradient p');
  outputGradient.innerText = `background-image: ${gradientValue};`;
};

const submitBtn = document.querySelector('[type=submit]');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const gradientValue = generateGradient(direction, fetchColors());
  changeBackgroundGradient(gradientValue);
  updateBackgroundValueDisplay(gradientValue);
});
