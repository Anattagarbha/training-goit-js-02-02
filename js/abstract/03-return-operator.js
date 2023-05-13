/* оператор return используется для передачи значения из тела функции 
во внешний код */

/* когда интерпретатор встречает return, он сразу же выходит 
из функции (прекращает её выполнение), и возвращает указанное 
значение в то место кода, где функция была вызвана */

"use strict";

function multiply(x, y, z) {
  console.log("Код до return выполняется как обычно");
  return x * y * z;
  console.log("Этот лог никогда не выполнится, он стоит после return");
}

// результат работы функции можно сохранить в переменную

let result = multiply(2, 3, 5);
console.log(result);

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550
