//кнопка подняться вверх
export function initUp(){
  window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const showAtScrollDistance = 500; // Показывать кнопку, если спустились минимум на 300px

  const upBtn = document.querySelector(".up");

  if (scrollPosition > showAtScrollDistance) {
    upBtn.classList.add("show-up-btn"); // Показываем кнопку
    upBtn.classList.remove("hidden"); // Убираем сокрытие
  } else {
    upBtn.classList.remove("show-up-btn"); // Скрываем кнопку
    upBtn.classList.add("hidden"); // Применяем сокрытие
  }
});

// Переход наверх при клике
document.querySelector(".up").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" }); // Гладкий возврат наверх
});
};
