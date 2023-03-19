function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
let span = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
 

  body.style.backgroundColor = currentColor;

  span.textContent = `${currentColor}`;
})

