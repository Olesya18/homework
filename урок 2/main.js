// Задача 1
const x = +prompt("Введите число");
if (x % 2 == 0) {
  alert(`Число ${x} четное`);
} else {
  alert(`Число ${x} нечетное`);
}

// Задача 2
const age = prompt("Введите возраст");
let discount = age < 18 ? 10 : age > 18 && age <= 65 ? 20 : 30;
console.log(discount);

// Задача 3
const usernamee = prompt("Введите логин");
const password = prompt("Введите пароль");
if (usernamee === "admin" || (usernamee === "user" && password === "123456")) {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен");
}

// *Задача 4

let weight;
do {
  weight = prompt("Введите вес посылки (в кг)");
  if (weight <= 0) {
    alert("Некорректный вес посылки");
  }
} while (weight <= 0);

let typeDelivery;
do {
  typeDelivery = prompt("Введите тип доставки (Стандарт / Экспресс / Премиум)");
  if (
    !(
      typeDelivery === "Стандарт" ||
      typeDelivery === "Экспресс" ||
      typeDelivery === "Премиум"
    )
  ) {
    alert("Неверный тип доставки");
  }
} while (
  !(
    typeDelivery === "Стандарт" ||
    typeDelivery === "Экспресс" ||
    typeDelivery === "Премиум"
  )
);

let baseCost = weight < 1 ? 5 : weight > 1 && weight <= 5 ? 10 : 15;

let coefficient;
switch (typeDelivery) {
  case "Стандарт":
    coefficient = 1;
    break;
  case "Экспресс":
    coefficient = 1.5;
    break;
  case "Премиум":
    coefficient = 2;
    break;
}

let totalCost = baseCost * coefficient;
alert(`Итоговая стоимость доставки: ${totalCost}$.`);
