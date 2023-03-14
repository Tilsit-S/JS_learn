"use strict"

// Объявление переменной

// Ключевое слово let для объявления переменной

// Имя переменной может содержать
// только буквы, лучше латинского алфавита,
// цифры и символы
// $ и _. При этом первый символ не должен быть цифрой.

/*
let age;
let info123;
let $size;
let _color;
*/

// Если переменная содержит несколько слов, принято использовать
// CamelCase "горбатый регистр", или "верблюжий регистр", а если
// точнее lowerCamelCase, когда каждое новое слово кроме первого
// начинается с заглавной буквы.
/*
let lowerCamelCase;

let username;
let userName; // эти выражения будут разные
*/
// Нельзя использовать зарезервированные имена в качестве переменных (let, break, for)

/*
let myLifeStyle = 'frontend-junior';
console.log(myLifeStyle);
*/

// Различные варианты перечисления переменных
// let myName = 'Alexey', myAge = 34, mySlogan = 'Lets do it';

/*
let myPerk = 'Alexey',
    myYersOld = 34,
    myText = 'Lets do it';

let myWork = 'IT';
let myPhone = 'Redmi';
let myCar = 'VW';

//myAge = 18;                     //изменение значения переменной без дублирования let.
//console.log(myAge);
*/

// Передача значений переменных
/*
let myAge = 34;
let myNewAge = 118;
myAge = myNewAge;
console.log(myAge);
*/

// ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ
// Видимость переменной только внутри блока инструкций
/*function testBlock() {
    let myAge = 36;
    console.log(myAge);
}
testBlock();
*/

/*console.log(myAge);*/ // Переменная не видна за пределами блока

// Повторное объявление переменной вызовет ошибку.

// При этом внутри блока, например цикла, проблем нет
/*
for (let i = 0; i < 3; i++) {
    // Тут своя переменная i
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    // И тут своя переменная i
    console.log(i);
}
*/

// КОНСТАНТЫ
/*
const myAge = 34;
myAge = 18;                 // Нельзя изменить константу
*/

// ИЗМЕНЕНИЕ ДАННЫХ ВНУТРИ КОНСТАНТЫ
/*
const userProfile = {
    name: 'Alexey',
    age: 34,
    message: 'Lets do it'
}
console.log(userProfile);

// Далее я меняю значение одного из полей объекта
userProfile.age = 18;
// Ошибки нет
console.log(userProfile);
*/

// Переменная var - ключевое отличие - она видна за пределами блока

if (true) {
    
}
