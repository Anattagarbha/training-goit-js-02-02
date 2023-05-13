/* доступ к списку всех аргументов можно получить при помощи 
специальной переменной arguments, которая доступна только 
внутри функции и хранит все аргументы как псевдомассив */

"use strict";

function multiply() {
  let total = 1;
  for (let argument of arguments) {
    total *= argument;
  }
  return total;
}

console.log(multiply(1, 2, 3)); // 6
console.log(multiply(1, 2, 3, 4, 5)); //  120
