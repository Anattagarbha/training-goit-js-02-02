/* функциональное выражение - объявление переменной со значением функции */

"use strict";

// объявление функции

multiply(4, 5, 6); // вызов до места создания

function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

// функциональное выражение

// различие в том, что функциональное выражение
// нельзя вызвать до места его создания

let multiplyExp = function (x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
};

multiplyExp(4, 5, 6);