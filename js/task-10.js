function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divHeigth = 30;
  let divWidth = 30;
  let divArray = [];

  for (let i = 1; i <= amount; i +=1) {
    const divColor = getRandomHexColor();

    const box = document.createElement('div');
    box.style.cssText = `height: ${divHeigth}px; width: ${divWidth}px; background-color: ${divColor}`;
    
    divArray.push(box);

    divHeigth += 10;
    divWidth += 10;
  }
 
boxesEl.append(...divArray);

}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(inputEl.value))

destroyBtn.addEventListener('click', () => boxesEl.innerHTML = '')


