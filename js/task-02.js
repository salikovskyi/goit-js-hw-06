const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const galleryListEl = document.querySelector('#ingredients');

const createitemElement = ingredients.map(el => {
  const createLiEl = document.createElement('li');
  createLiEl.textContent = el;
  createLiEl.classList.add('item');
  return createLiEl;
})

galleryListEl.append(...createitemElement);



