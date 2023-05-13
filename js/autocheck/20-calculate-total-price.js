"use strict";

function calculateTotalPrice(order) {
  let total = 0;
  let number;
  for (let i = 0; i < order.length; i += 1) {
    number = order[i];
    total += number;
  }
  return total;
}
