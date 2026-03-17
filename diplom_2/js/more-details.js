//кнопка подробнее в объявлениях
export function showFullText(event, textId) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки
  const textElement = document.getElementById(textId);
  const btn = event.target;
  if(textElement){
    textElement.classList.toggle("semi-transparent-text");

    if(textElement.classList.contains("semi-transparent-text")){
      btn.textContent = "Подробнее";
      textElement.style.color = "transparent";
    }else{
      btn.textContent = "Скрыть";
      textElement.style.color = "#fff";
    };
  };
};

//кнопка подробнее в вакансиях
export function showAgeDetails(event, ageId) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки
  const ageElement = document.getElementById(ageId);
  const btnAge = event.target;
  
  if(ageElement){
    ageElement.classList.toggle("semi-transparent-text");

    if(ageElement.classList.contains("semi-transparent-text")){
      btnAge.textContent = "Подробнее";
      ageElement.style.color = "transparent";
    }else{
      btnAge.textContent = "Скрыть";
      ageElement.style.color = "#fff";
    };
  };
};


