/*
    Напиши скрипт, который реагирует на изменение значения input#font-size-control 
    (событие input) и изменяет инлайн-стиль
    span#text обновляя свойство font-size. 
    В результате при перетаскивании ползунка будет меняться размер текста.
*/
const inputRange = document.querySelector('#font-size-control');
const inputText = document.querySelector('span#text');

const handleInput = () => {
  inputText.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener('input', handleInput);

