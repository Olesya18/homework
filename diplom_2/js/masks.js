//маска для телефона
export function initMaskTel() {
  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7(999) 999-99-99");
  im.mask(telInputs);
};


//Маска для поля дата и время
export function initMaskDate(){
  flatpickr("#datetime-input", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
});
};
