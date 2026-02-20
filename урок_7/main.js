//Задача 1
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(1, 10));

//Задача 2

function makeNegative(num) {
  if (num > 0) {
    return num * (-1);
  } else if (num <= 0) {
    return num;
  }
}

console.log(makeNegative(5));
console.log(makeNegative(0));
console.log(makeNegative(-10));
console.log(makeNegative(0.01));

//Задача 3

function past(h, m, s) {
  h *= 3600000;
  m *= 60000;
  s *= 1000;

  return h + m + s;
}
console.log(past(0, 1, 1));
console.log(past(0, 58, 45));
console.log(past(5, 10, 59));
console.log(past(22, 30, 0));

//Задача 4

function invert(array) {
  const result = [];
  array.forEach(element => {
    result.push(element * -1);
  });
  return result;
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([-1, 2, 3, -4, 5]));
console.log(invert([-1, -2, -3, -4, -5]));

//Задача 5

function smash(words) {
  return words.join(" ");
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));

//Задача 6

function sum(numbers) {
  summa = 0;
  if (numbers == []) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      summa += numbers[i];
    }
  }
  return summa;
}

console.log(sum([1, 2, 3, 4, 5]));

//Задача 7

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 != 0 || flower2 % 2 === 0 && flower1 % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(5, 5));
console.log(lovefunc(2, 4));
console.log(lovefunc(6, 9));
console.log(lovefunc(7, 8));

//Задача 8

function findAverage(array) {
  average = 0;
  if (array == []) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      average += array[i] / array.length;
    }
    return average;
  }
}

console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([1, 1, 1]));

//Задача 9

function makeUpperCase(str) {
   return str.toUpperCase();
}

console.log(makeUpperCase("hello world this is great"));

//Задача 10

function noSpace(x){
  return x.replace(/\s/g, "");
}

console.log(noSpace("h e l l o w o r l d  t h i s i s g r e a t"));