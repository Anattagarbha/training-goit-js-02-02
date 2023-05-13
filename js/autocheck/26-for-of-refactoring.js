/* выполни рефакторинг кода функции calculateTotalPrice(order),  
заменив цикл for на for...of */

"use strict";

function calculateTotalPrice(order) {
  let total = 0;
  for (let itemPrice of order) {
    total += itemPrice;
  }
  return total;
}
