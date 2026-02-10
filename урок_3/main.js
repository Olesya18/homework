// Задача 1
for (let i = 1; i <= 20; i++) {
  if (i % 4 !== 0) {
    console.log(i);
  }
}

// Задача 2

let number = +prompt("Введите число");
let result = 1;
for (let i = 1; i <= number; i++) {
  result *= i;
}
console.log(`Факториал числа ${number} равен ${result}`);

// *Задача 3
let board = "";
for (let i = 1; i <= 8; i++) {
  let currentSymbol = (i % 2 === 1 ? "#" : " ");
  for (let j = 1; j <= 8; j++) {
    board += currentSymbol;

    currentSymbol = (currentSymbol === "#" ? " " : "#");
  }
  console.log(board);
  board = "";
}
