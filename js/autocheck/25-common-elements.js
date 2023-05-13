/* напиши функцию getCommonElements(array1, array2), которая получает два массива 
произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий 
из тех элементов, которые присутствуют в обоих исходных массивах */

"use strict";

function getCommonElements(array1, array2) {
  let commonElementsArr = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      commonElementsArr.push(array1[i]);
    }
  }
  return commonElementsArr;
}
