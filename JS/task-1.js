//Напиши скрипт, который выполнит следующие операции.

//Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item.Получится 'В списке 3 категории.'.
const getCategoriesQty = () => {
  const categoriesListItems = document.querySelectorAll('.item');

  console.log(`В списке ${categoriesListItems.length} категории`);
    //Для каждого элемента li.item в списке ul#categories, найдет и 
    //выведет в консоль текст заголовка элемента(тега h2) и количество 
    //элементов в категории(всех вложенных в него элементов li).

  categoriesListItems.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const categoryElements = category.querySelectorAll('li');

    console.log(`Категория: ${categoryTitle.textContent}`);
    console.log(`Количество элементов: ${categoryElements.length}`);
  });
};

getCategoriesQty();
//Например для первой категории получится:

//Категория: Животные
//Количество элементов: 4//


