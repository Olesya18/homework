"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos

const getForm = document.querySelector(".form");
const getInput = document.querySelector(".input");
const getTodos = document.querySelector(".todos");

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки

function createTodoElement(todo) {
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");
  todoElement.dataset.id = todo[todoKeys.id];
  todoElement.innerHTML = `
	<div class="todo-text">${todo[todoKeys.text]}</div>
  <div class="todo-actions">
		<button class="button-complete button">&#10004;</button>
		<button class="button-delete button">&#10006;</button>
	</div>
	`;
  getTodos.append(todoElement);
  return todoElement;
}

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

function handleCreateTodo(todos, text) {
  if (text == "") {
    return; //проверяем пустое ли поле input
  }

  const newTodo = createTodo(todos, text); //присваиваем переменной newTod вызов функции createTodo(todos, text)

  createTodoElement(newTodo); //вызываем функцию createTodoElement
}

const button = document.querySelector(".button-create"); //находим кнопку Добавить

button.addEventListener("click", () => {
  //накладываем на кнопку Добавить событие click
  const text = getInput.value; // получаем значение текущего текста из элемента input

  handleCreateTodo(todos, text); // вызываем функцию handleCreateTodo

  getInput.value = ""; // очищаем поле ввода
});

getTodos.addEventListener("click", ({ target }) => {
  const todo = target.closest(".todo");
  if (!todo) return;

  const todoId = Number(todo.dataset.id);

  if (target.matches(".button-complete")) {
    completeTodoById(todos, todoId);
    todo.classList.toggle("completed");
  }

  if (target.matches(".button-delete")) {
    deleteTodoById(todos, todoId);
    todo.remove();
  }
});
