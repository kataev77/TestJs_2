//Задание 1

/*function removeUser () {

};

function createPost () {

};

function addItem () {

};

function readFile () {

};

function getElement () {

};

function createParentElement () {

};

function startGame () {

};

function sendMessage () {

};*/


//Задание 2
//Функция message с параметром mess, передаем в параметр mess текст ""
/*function message(mess) {
    
}
message('Добрый день');

//Функция addNumbers с параметром number, передаем числа сложения в параметр локальные переменные
function addNumbers(number) {
    
}
addNumbers(7 + 1);

//Функция compOperators с параметром operat, передаем сравнения в параметр из лок.перемен.
function compOperators(operat) {

};
compOperators(8 > 1);

//Функция multiPlication с параметром summ, передаем числа умножение в параметр из лок.перемен.
function multiPlication(summ) {

};
multiPlication(7 * 2);

//Вычитаем
function subtraction(summ) {

};
subtraction(7 - 1);

//Функция passwordComparison с параметром pass, передаем пароль в параметр из лок.перемен. 
function passwordComparison(pass) {

};
passwordComparison('qwert');

//Сравнения логина
function loginComparisons(log) {

};
loginComparisons('kataev77');

//Undefined
function undefined(undef) {

};
undefined('ind');

 // создаёт форму (и обычно возвращает её)
function createForm(form) {

};
createForm(78798);
// проверяет доступ, возвращая true/false
function checkPermission(check) {

};
checkPermission(7 === 8);
*/

//Задание 3
//вычисления
function calcSumm(summ) {
    return summ + 9
};
calcSumm(8 + 9);


//возращает возраст
function getAge(Age) {
    return Age
};
getAge(21);

//Возращает сообщение
function showMessage(message) {
    return message;
};
showMessage('Hello world');

//Возращает логин(но если добавить код то проверяет доступ но в моей задание такое писать небыло:)))
function checkLogin(log){
    return log
};
checkLogin('Kataev77');

//возращает номер
function numbers(numb) {
    return numb
};
numbers(798889);

//Пароль
function password(pass) {
    return pass
}
password('qwert');

//результат
function result(res) {
    return res + 10
}
result(10);

//Сравнение
function likenNumber(numb) {
    return numb >= 10
}
likenNumber(9);

//Возрашает элемент
function isPrime(element) {
    //...
    return element
}
isPrime(['aaa']);


function string(str) {
    return str
}
string('asad');


//задание 4

function summa(summ){
    return summ * 2
}
console.log(summa(3));


function resultNan(resNan) {
    return resNan * 2
}
console.log(resultNan('aa'));


function number(numb) {
    return numb * 2
}
console.log(number(10));

function sum(a, b){
    return a + b * 2
}
console.log(sum(1, 1));

function func(a){
    return a * 2 + 3
}
console.log(func(2));

//задание 5

function arrr (a, b, c) {
    return a
}
console.log(arrr(['Hello'],['World']));


function arre(a, b, c) {
    return c
}
console.log(arre([4564],[789],[895445]));


//Функция printMyFullName принимает два параметра ... ... . В значение в функции констант fullname его значения параметры функции. Из консоли into code 
// принимается в параметры и возращает констант fullname
function printMyFullName(firstname, secondname) {
    const fullname = `${firstname} ${secondname}`;
  
    return fullname;
  }
  
  console.log(printMyFullName('into', 'code'));
  
  //
  function getSumOfFirstAndLastElement(arr) {
    if(arr.length < 2) {
      return 'леее, минимум два элемента нужно жи есть';
    } else {
      const lastIndex = arr.length - 1;
  
      return arr[0] + arr[lastIndex];
    }
  }
  
  console.log(getSumOfFirstAndLastElement([]));
  
  console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]));


  let text = "css";

function testVariableScope() {
  let text = "html";

  return text;
}

console.log(testVariableScope());

  






