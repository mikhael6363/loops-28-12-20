'use strict';

/* 1. Вывод чисел от 25 до 0 (порядок уменьшения) {+5 таска} */

// Циклом "for":
function getDecreasingNums1(maxNum, minNum) {
  if(isNaN(maxNum - minNum)) {
    return null;
  }
  for(let i = maxNum; i >= minNum; i--) {
    console.log(i);
  }
}
getDecreasingNums1(25,0);

// Циклом "while":
function getDecreasingNums2(maxNum, minNum) {
  if(isNaN(maxNum - minNum)) {
    return null;
  }
  let i = maxNum;
  while(i >= minNum) {
    console.log(i--);
  }
}
getDecreasingNums2(25,0);

// Циклом "do...while":
function getDecreasingNums3(maxNum, minNum) {
  if(isNaN(maxNum - minNum)) {
    return null;
  }
  let i = maxNum;
  do {
    console.log(i--);
  } while(i >= minNum);
}
getDecreasingNums3(25,0);



/* 2. Вывод чисел от 10 до 50, которые кратны 5 {+5 таска} */

// Циклом "for":
function getIncreasingNums1(minNum, maxNum) {
  if(isNaN(minNum - maxNum)) {
    return null;
  }
  for(let i = minNum; i <= maxNum; i++) {
    if(i % 5 === 0) {
      console.log(i);
    }
  }
}
getIncreasingNums1(10, 50);

// Циклом "while":
function getIncreasingNums2(minNum, maxNum) {
  if(isNaN(minNum - maxNum)) {
    return null;
  }
  let i = minNum;
  while(i++ <= maxNum) {
    if(i % 5 === 0) {
      console.log(i);
    }
  }
}
getIncreasingNums2(10, 50);

// Циклом "do...while":
function getIncreasingNums3(minNum, maxNum) {
  if(isNaN(minNum - maxNum)) {
    return null;
  }
  let i = minNum;
  do {
    if(i % 5 === 0) {
      console.log(i);
    }
  } while(i++ <= maxNum);
}
getIncreasingNums3(10, 50);



/* 3. Найти сумму чисел в пределах от 1 до 100. {+5 таска} */

// Циклом "for":
function sumOfNums1(maxValue) {
  if(isNaN(maxValue)) {
    return null;
  }
  let result = 0;
  for(let i = 1; i <= maxValue; i++) {
    result += i;
  }
  return result;
}
console.log(sumOfNums1(100));


// Циклом "while":
function sumOfNums2(maxValue) {
  if(isNaN(maxValue)) {
    return null;
  }
  let result = 1;
  let i = 1;
  while(i++ < maxValue) {
    result += i;
  }
  return result;
}
console.log(sumOfNums2(100));

// Циклом "do...while":
function sumOfNums3(maxValue) {
  if(isNaN(maxValue)) {
    return null;
  }
  let result = 0;
  let i = 0;
  do {
    result += i;
  } while(++i <= maxValue);
  return result;
}
console.log(sumOfNums3(100));



/* 4. Предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит. {+5 таска} */

// Циклом "for":
function getConversion1() {
  for(;;) {
    const userInput = Number(prompt('Сколько будет 2 + 2 * 2  ?'));
    if (userInput === CORRECT_VALUE) {
      return alert('Это верный ответ!');
    }
  }
}
getConversion1();

// Циклом "while":
function getConversion2() {
  while(true) {
    const userInput = Number(prompt('Сколько будет 2 + 2 * 2  ?'));
    if (userInput === CORRECT_VALUE) {
      return alert('Это верный ответ!');
    }
  }
}
getConversion2();

// Циклом "do...while":
function getConversion3() {
  do {
    const userInput = Number(prompt('Сколько будет 2 + 2 * 2  ?'));
    if (userInput === CORRECT_VALUE) {
      return alert('Это верный ответ!');
    }
  } while(true);
}
getConversion3();



/* 5. Каждую задачу решить всеми тремя циклами! => см. сверху */