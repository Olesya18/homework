import { setTodosToLocalStorage } from "./storage.js";
import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js"

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
};

export const renderTodos = (todos) => {
    getTodos.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        if (todo[todoKeys.is_completed]) {
            todoElement.classList.add("completed");
        }
        getTodos.prepend(todoElement);
    });
};

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

function handleCreateTodo(todos, text) {
    if (text == "") return;
    //проверяем пустое ли поле input

    const newTodo = createTodo(todos, text); //присваиваем переменной newTod вызов функции createTodo(todos, text)
    setTodosToLocalStorage(todos);
    createTodoElement(newTodo); //вызываем функцию createTodoElement
};



export const initTodoHandlers = (todos) => {
    getForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = getInput.value.trim(); // получаем значение текущего текста из элемента input
        handleCreateTodo(todos, text); // вызываем функцию handleCreateTodo
        getInput.value = ""; // очищаем поле ввода
    });
    getTodos.addEventListener("click", ({ target }) => {
        const todo = target.closest(".todo");
        if (!todo) return;

        const todoId = Number(todo.dataset.id);

        if (target.matches(".button-complete")) {
            completeTodoById(todos, todoId);
            setTodosToLocalStorage(todos);
            todo.classList.toggle("completed");
        }

        if (target.matches(".button-delete")) {
            deleteTodoById(todos, todoId);
            setTodosToLocalStorage(todos);
            todo.remove();
        }
    });
};

