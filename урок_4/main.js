// Задача 1
function calculateFinalPrice(price, sale, nalog) {
  const priceWithSale = price - (price * sale) / 100;
  const sumOfNalog = priceWithSale * nalog;
  const finalPrice = priceWithSale + sumOfNalog;
  console.log(finalPrice);
}

calculateFinalPrice(100, 10, 0.2);
calculateFinalPrice(100, 10, 0);

// Задача 2
function checkAccess(login, password) {
  if (login === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkAccess("admin", "123456"));

// Задача 3
function getTimeOfDay(time) {
  if (time >= 0 && time <= 5) {
    return "Ночь";
  } else if (time >= 6 && time <= 11) {
    return "Утро";
  } else if (time >= 12 && time <= 17) {
    return "День";
  } else if (time >= 18 && time <= 23) {
    return "Вечер";
  } else {
    return "Некорректное время";
  }
}
console.log(getTimeOfDay(5));
console.log(getTimeOfDay(12));
console.log(getTimeOfDay(-1));

// Задача 4
function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(1, 5));
console.log(findFirstEven(9, 9));
