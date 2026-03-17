// Функция для показа и скрытия бокового окна с номером телефона
export function initNumWindow() {
  const phoneWindow = document.getElementById("window-phone");
  const openButton = document.querySelector(".window__icon-open");
  const closeButton = document.querySelector(".window-phone__cancel");

  // Открыть окно
  openButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    phoneWindow.classList.add("body--opened-window"); // Добавляем класс body--opened-window
  });

  // Закрыть окно
  closeButton.addEventListener("click", function (e) {
    e.preventDefault(); // Запрещаем стандартное поведение ссылки
    phoneWindow.classList.remove("body--opened-window"); // Убираем класс opened body--opened-window
  });

  document.addEventListener("click", function (e) {
    if (!phoneWindow.contains(e.target)) {
      phoneWindow.classList.remove("body--opened-window");
    }
  });
};
