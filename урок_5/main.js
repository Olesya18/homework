// Задача 1
const person = {
  name: "Olesya",
  surname: "Takhtay",
  age: 26,
  isProgrammer: true,
  hobby: "drawing, sport",
};

console.log(person);
console.log(person.name);
console.log(person.age);

// Задача 2
const emptyObject = {};
const nonEmptyObject = { name: "Olesya" };

let isEmpty = (object) => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

console.log(isEmpty(emptyObject));
console.log(isEmpty(nonEmptyObject));

// Задача 3
const task = {
  title: "Задание по объектам",
  description: "Сделать практическое задание по объектам",
  isCompleted: false,
};

const modifications = {
  isCompleted: true,
  priority: "high",
};

function cloneAndModify(object, modifications) {
  const cloneTask = { ...object, ...modifications };

  return cloneTask;
}
const modifiedTask = cloneAndModify(task, modifications);

for (const key in modifiedTask) {
  console.log(modifiedTask[key]);
}

// Задача 4
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

function callAllMethods(object) {
  let hasMethod = false;
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]();
      hasMethod = true;
    }
  }
  if (!hasMethod) {
    return "В этом объекте методов нет";
  }
}

console.log(callAllMethods(myObject));
