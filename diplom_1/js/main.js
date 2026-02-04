/* Модальное окно*/
// Найдем все кнопки с классом "open-modal"
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

//маска для телефона

const telInputs = document.querySelectorAll('input[type="tel"]');

const im = new Inputmask("+7(999) 999-99-99");

im.mask(telInputs);

//Маска для поля дата и время

flatpickr("#datetime-input", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
});

// Функция для показа и скрытия бокового окна с номером телефона

document.addEventListener("DOMContentLoaded", function () {
  const phoneWindow = document.getElementById("window-phone");
  const openButton = document.querySelector(".window__icon-open");
  const closeButton = document.querySelector(".window-phone__cancel");

  // Открыть окно
  openButton.addEventListener("click", function (e) {
    e.preventDefault(); // Запрещаем стандартное поведение ссылки
    phoneWindow.classList.add("opened"); // Добавляем класс opened
  });

  // Закрыть окно
  closeButton.addEventListener("click", function (e) {
    e.preventDefault(); // Запрещаем стандартное поведение ссылки
    phoneWindow.classList.remove("opened"); // Убираем класс opened
  });
});

//Аккордион
// Находим все элементы управления (аккордеоны)
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

//слайдер в объявлениях

new Swiper(".advertisements__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".advertisements__next",
    prevEl: ".advertisements__prev",
  },

  breakpoints: {
    301: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
    401: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },
    501: {
      slidesPerView: 1.4,
      spaceBetween: 50,
    },
    601: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    701: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },
    801: {
      slidesPerView: 1.9,
      spaceBetween: 30,
    },
    901: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
    1001: {
      slidesPerView: 2.3,
    },
    1201: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1801: {
      slidesPerView: 3,
    },
  },
});

//кнопка подробнее в объявлениях
function showFullText(event, textId) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки

  const textElement = document.getElementById(textId);

  textElement.classList.remove("semi-transparent-text");
}

//слайдер вакансии

new Swiper(".vacations__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".vacations__next",
    prevEl: ".vacations__prev",
  },

  breakpoints: {
    301: {
      slidesPerView: 1,
    },
    401: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },
    501: {
      slidesPerView: 1.4,
      spaceBetween: 50,
    },
    601: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    701: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },
    801: {
      slidesPerView: 1.9,
      spaceBetween: 30,
    },
    901: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
    1001: {
      slidesPerView: 2.3,
    },
    1201: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1801: {
      slidesPerView: 3,
    },
  },
});

//кнопка подробнее в вакансиях
function showAgeDetails(event, ageId) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки

  const ageElement = document.getElementById(ageId);

  ageElement.classList.remove("semi-age");
}

//кнопка подняться вверх
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
