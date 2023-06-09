/* чтобы продолжить работу уже вызванные функции, которые не закончили 
свое выполнение, должны ждать выполнения функций вызванных внутри себя */

/* стек вызовов это механизм отслеживания текущего местонахождения 
интерпретатора в коде, который вызывает несколько функций */

"use strict";

function fnA() {
  console.log("Лог внуртри функции fnA до вызова fnB");
  fnB();
  console.log("Лог внуртри функции fnA после вызова fnB");
}

function fnB() {
  console.log("Лог внутри функции fnB");
}

console.log("Лог перед вызовом fnA");
fnA();
console.log("Лог после вызова fnA");
