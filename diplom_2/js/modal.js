/* Модальное окно*/
// Найдем все кнопки с классом "open-modal"

export function initModal(){
const buttons = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".modal");

// Присваиваем каждой кнопке обработчик события
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Запрещаем стандартное поведение ссылок
    openModal(); // Открываем модальное окно
  });
});

// Функция открытия модального окна
 function openModal() {
  document.body.classList.add("body--opened-modal"); // Показываем модальное окно
}

// Прикрепляем обработчик закрытия модального окна
modal.addEventListener("click", function (event) {
  const target = event.target;

  // Если кликнут по специальной зоне закрытия или по самому модальному окну
  if (target.closest(".modal__cancel") || target.classList.contains("modal")) {
    event.preventDefault(); // Добавляем preventDefault()
    document.body.classList.remove("body--opened-modal"); // Закрываем модальное окно
  }
});
};

