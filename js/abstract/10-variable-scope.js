/* область видимости (scope) - механизм, который определяет 
доступность переменных в исполняемом коде */

/* дочерние области имеют доступ к переменным 
из родительских областей, но не наоборот */

"use strict";

// глобальная область видимости

const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
}

// блочная область видимости

function foo() {
  const a = 20;
  console.log(a); // 20

  for (let i = 0; i < 5; i++) {
    console.log(a);
    if (i === 2) {
      console.log(a);
    }
  }
}

foo();

// console.log(a); - ошибка!
