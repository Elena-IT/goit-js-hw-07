
/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}*/
const myInput = document.querySelector('#validation-input');
const myDataLength = document.querySelector('[data-length="6"]');
const myDataLengthLength = myDataLength.dataset.length;

myInput.addEventListener('focus', () =>{
    console.log('получил фокус')
})

myInput.addEventListener('blur', () => {
    if (myInput.value.length === Number(myDataLength.dataset.length)) { 
        myInput.classList.add('valid');
        myInput.classList.remove('invalid');
      } else { 
        myInput.classList.remove('valid');     
        myInput.classList.add('invalid');
      }
      console.log(myInput.value.length);
      console.log(myInput)
      console.log(myDataLengthLength)
})