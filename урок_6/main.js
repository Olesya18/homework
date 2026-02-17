// Задание 1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

console.log(users);

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2

function getUserAverageAge(users) {
  let averageAge = 0;
  for (let i = 0; i < users.length; i++) {
    averageAge += users[i].age / 2;
  }
  return averageAge;
}

console.log(getUserAverageAge(users));

// Задание 3

function getAllAdmins(users) {
  const admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
      admins.push(users[i]);
    }
  }
  return admins;
}

console.log(getAllAdmins(users));

// Задание 4
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function first(arr, n) {
  let result = [];
  if (n == 0) {
    return [];
  } else if (n == undefined) {
    return [arr[0]];
  } else {
    for (let i = 0; i < n; i++) {
      result.push(arr[i]);
    }
    return result;
  }
}

console.log(first(array, 5));
console.log(first(array, 0));
console.log(first(array, undefined));
