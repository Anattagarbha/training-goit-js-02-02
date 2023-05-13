/* напиши функцию filterArray(numbers, value), которая принимает массив чисел 
(параметр numbers) и возвращает новый массив, в котором будут только те элементы 
массива numbers, которые больше чем значение параметра value (число) */

"use strict";

function filterArray(numbers, value) {
  let maxValueArr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      maxValueArr.push(numbers[i]);
    }
  }
  return maxValueArr;
}
