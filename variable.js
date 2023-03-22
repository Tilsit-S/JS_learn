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
/*
if (true) {
    var size = 15;
}
console.log(size);
*/

//Динамическая типизация
/*
let userName;

console.log(typeof userName);

userName = 'begginer program';

console.log(typeof userName);

userName = 58;

console.log(typeof userName);
*/
//Типы данных
/*
Undefined - неопределённый тип,
null - так же, как и undefined, содержит только одно значение null
Boolean - Булевый, или логический тип. Может принимать
только два значения: true, false
*/
/*
let willYouMarryMe = false;
if (willYouMarryMe) {
    console.log(':)');
} else {
    console.log(':(');
}
*/

// Так же можно использовать с операторами сравнения
/*
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);
*/

// Number: представлен в виде целых и дробных чисел
/*
let userAge = 20;
let userHight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHight);
console.log(typeof userHight);
*/

// Infinity - математическая бесконечность
/*
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/

// NaN - результата математической ошибки
/*
let getNan = 'Alexey' / 10;
console.log(getNan);
console.log(typeof getNan);
*/

// BigInt - большое число
// number не может быть больше 9007199254740991
// или меньше -9007199254740991
/*
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);
*/

// String - строка, например 'my name is Alexey'
// "my name is Alexey"
// обратные кавычки могут иметь приятный результат
/*
let userAge = 34;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);
*/

// Объект {} и может содержать в себе несколько свойств
/*
let userInfo = {
    name: "Alexey",
    age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
*/

// Symbol
/*
let id = Symbol("id");
console.log(typeof id);
*/

// Function
/*
let funcVariable = function name (params) {
    //код функции
}
console.log(typeof funcVariable);
*/

// Преобразование типов

// Строковое преобразование
/*
let userAge = 34;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);
*/

// Преобразование true в строку
/*
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);   // в данном случае true будет уже как строка

/*
let userAge = "72" / "2";
console.log(userAge);
console.log(typeof userAge);
*/

// Логическое преобразование
/*
let userAge = 58;       // но число "0" вернёт false. При этом строка "0" будет true
console.log(userAge);
console.log(typeof userAge);

userAge = Boolean(userAge);

console.log(userAge);
console.log(typeof userAge);
*/

// ТИПЫ ДАННЫХ
/*
let userName;
console.log(typeof userName);
userName = "Alexey";
console.log(typeof userName);
userName = 58;
console.log(typeof userName);
*/
// Тип данных меняется, когда мы изменяем ему значение

// Undefined - неопределённый тип
/*
let userName;
console.log(typeof userName);
console.log(userName);
*/
// Примеры использованияю Проверяем, определена ли переменная
/*
if (userName === undefined) {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}

if (typeof userName === 'undefined') {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}
*/


// ОПЕРАТОРЫ:
// Термины: "унарный", "бинарный", "операнд"
//Операнд - это то, к чему применяется оператор, их ещё называют аргументы.

/*
let userAge = 30 - 6; // Числа 30 и 6 - это операнды
let userHight = h-y; // Переменные h и y - это операнды
*/

//Бинарный оператор - который применяется к двум операндам, например "-", "+".
/*
let userAge = 30 - 6;
*/

// Унарным считается оператор, который применяется только к одному операнду
/*
let userCash = -800;
*/

// Математические действия
/*
let x;
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

x = 45 - 12;
console.log(`Результат вычитания: ${x}`);

x = 45 * 12;
console.log(`Результат умножения: ${x}`);

x = 45 - 12;
console.log(`Результат вычитания: ${x}`);

x = 11 % 3;
console.log(`Результат взятия от деления: ${x}`);

x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);
*/

// Складываем строки
/*
let resultOne = "My" + " name" + " is" + " Alexey";
console.log(resultOne);

let resultTwo = "Freelance " + 58;  //порядок значения не имеет
console.log(typeof resultTwo);
console.log(resultTwo);

let resultTree = 2 + "2";
console.log(resultTree);

let resultFour = 54 - 20 + " Freelance";
console.log(resultFour);
*/
// Сложение и преобразование строк - это особенность бинарного оператора сложения.
// Другие арифметические операторы работают только с числами, соответственно
// преобразовывают все операнды в числа.
/*
let resultOne = "25" - 5;
console.log(resultOne);

let resultTwo = "80" * 10;
console.log(resultTwo);

let resultTree = 3 * "Freelance";
console.log(resultTree);
console.log(typeof resultTree);
*/

// Унарный оператор сложения +

// Со строками
let resultOne = +"25";
console.log(typeof resultOne);
console.log(resultOne);     // Результат преобразования строки в число



