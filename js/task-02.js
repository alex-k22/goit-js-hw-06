const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulArray = [];

ingredients.forEach(element => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = element;
  listItemEl.classList.add('item');
  ulArray.push(listItemEl);

});

const targetUl = document.querySelector("#ingredients");
targetUl.append(...ulArray);