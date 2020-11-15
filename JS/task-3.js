
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//Используй массив объектов images для создания тегов img вложенных в li. 
const creatImagesList = document.querySelector('#gallery');
images.forEach(element => {
    console.log(element);
    //создать элемент списка (лишка)
    const linkListImages = document.createElement(`li`);
    ////создать элемент списка (img)
    const linkImages = document.createElement(`img`); 
    //добавить элемент в начало списка
    linkImages.insertAdjacentHTML('afterbegin', element);
    //вставить узел после ('#gallery')
    creatImagesList.append(linkListImages);
    linkListImages.append(linkImages);
    //добавить артибут
    linkImages.setAttribute('src', element.url);
    linkImages.setAttribute('alt', element.src);
    linkListImages.classList.add('image-name');
}    
)
