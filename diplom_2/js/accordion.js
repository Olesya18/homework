//Аккордион
// Находим все элементы управления (аккордеоны)
export function initAccordion() {
  const accordionControls = document.querySelectorAll(".accordion-list__control");

  // Перебираем каждую кнопку управления
  accordionControls.forEach((control) => {
    control.addEventListener("click", function (e) {
      e.preventDefault(); // Отменяем стандартное поведение кнопки

      // Родительский элемент (пункт аккордиона)
      const parentPanel = this.closest(".accordion-list__item");

      // Все открытые панели (исключение - текущий пункт)
      const panelsToClose = document.querySelectorAll(
        ".accordion-list__item--opened",
      );

      // Закрываем все активные панели
      panelsToClose.forEach((panel) => {
        if (panel !== parentPanel) {
          panel.classList.remove("accordion-list__item--opened");
          const contentBlock = panel.querySelector(".accordion-list__content");
          if (contentBlock) {
            contentBlock.style.maxHeight = "0";
          }
        }
      });

      // Переключаем состояние текущего пункта
      parentPanel.classList.toggle("accordion-list__item--opened");

      // Устанавливаем высоту внутреннего контента
      const contentBlock = parentPanel.querySelector(".accordion-list__content");
      if (parentPanel.classList.contains("accordion-list__item--opened")) {
        contentBlock.style.maxHeight = contentBlock.scrollHeight + "px";
      } else {
        contentBlock.style.maxHeight = "0";
      }
    });
  });
};
