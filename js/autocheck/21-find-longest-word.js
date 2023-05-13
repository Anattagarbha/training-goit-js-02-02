/* напиши функцию findLongestWord(string) которая принимает 
произвольную строку состоящую только из слов разделённых пробелом 
(параметр string) и возвращает самое длинное слово в этой строке */

"use strict";

function findLongestWord(string) {
  let word;
  let longestWord = 0;
  let arrFromString = string.split(" ");
  for (let i = 0; i < arrFromString.length; i += 1) {
    if (arrFromString[i].length > longestWord) {
      longestWord = arrFromString[i].length;
      word = arrFromString[i];
    }
  }
  return word;
}
