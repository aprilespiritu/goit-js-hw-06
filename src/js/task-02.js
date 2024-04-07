const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.getElementById("ingredients");

for (let ingredient of ingredients) {
  let li = document.createElement('li')
  li.innerText = ingredient
  ul.appendChild(li);
}