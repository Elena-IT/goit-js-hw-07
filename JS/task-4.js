//Счетчик состоит из спана и кнопок, которые должны увеличивать и 
//уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
function increment () {
    counterValue +=1;
    render()
}
function decrement () {
    counterValue -=1;
    render()
}
function render () {
    ref.htmlValue.textContent = counterValue;
}

//создать объект со ссылками
const ref = {
    //поиск по data-action
    buttonDecrement: document.querySelector('[data-action="decrement"]'),  
    buttonIncrement: document.querySelector('[data-action="increment"]'),
    //поиск
    htmlValue: document.querySelector('#value') 
}
ref.buttonDecrement.addEventListener('click', decrement);
ref.buttonIncrement.addEventListener('click', increment);
ref.buttonDecrement.addEventListener('handler', decrement);
ref.buttonIncrement.addEventListener('handler', increment);

