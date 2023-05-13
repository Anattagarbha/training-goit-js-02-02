/* иногда необходимо объявить функцию, у параметров которой будут 
значения отличные от undefined, даже если для них не передали аргументы */

"use strict";

function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  for (let i = countFrom; i < countTo; i += step) {
    console.log(i);
  }
}

count();
count(1, 5);
