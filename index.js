'use strict';

// 1. Вывод чисел от 25 до 0 (порядок уменьшения) 
// 2. Вывод чисел от 10 до 50, которые кратны 5
const MAX_OUTPUT_VALUE = 50;
const MIN_VALUE = 0;

function getOutputOfNums() {
  console.log('Вывод чисел от 25 до 0 (порядок уменьшения):');
  for(let i = 25; i >= MIN_VALUE; i--) {
    console.log(i);
  }
  console.log('Вывод чисел от 10 до 50, которые кратны 5:');
  for(let i = 10; i <= MAX_OUTPUT_VALUE; i++) {
    if(i % 5 === 0) {
      console.log(i);
    }
  }
}
getOutputOfNums();


// Найти сумму чисел в пределах от 1 до 100.
const MAX_VALUE = 100;

function sumOfNums() {
  if(isNaN(MAX_VALUE)) {
    return null;
  }
  let result = 0;
  for(let i = 1; i <= MAX_VALUE; i++) {
    result += i;
  }
  return console.log(result);
}
sumOfNums();


// Предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
const CORRECT_VALUE = 6;

function getConversion() {
  while(true) {
    const userInput = Number(prompt('Сколько будет 2 + 2 * 2  ?'));
    if (userInput === CORRECT_VALUE) {
      return alert('Это верный ответ!');
    }
  }
}
getConversion();