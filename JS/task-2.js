const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, 
//который для каждого элемента массива ingredients создаст отдельный li,
const createIngredientsListItem = item => {
  const listItem = document.createElement('li');

  listItem.textContent = item;

  return listItem;
};

//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const listItemsArr = ingredients.map(ingredient =>
  createIngredientsListItem(ingredient),
);

const list = document.querySelector('#ingredients');

list.append(...listItemsArr);

console.log('Динамически созданный список ингредиентов: ', list);