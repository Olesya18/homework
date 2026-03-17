//слайдер в объявлениях
export const advertisementsSlider = () => {
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
};

//слайдер вакансии
export const vacationsSlider = () => {
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
};
