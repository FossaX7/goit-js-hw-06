const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientsItem = ingredient => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
  
    return itemEl;
  });
};
const elements = makeIngredientsItem(ingredients);
ingredientsEl.append(...elements);