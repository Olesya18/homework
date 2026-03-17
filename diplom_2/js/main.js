import { initModal } from './modal.js';
import { initAccordion } from './accordion.js';
import { showFullText } from './more-details.js';
import { showAgeDetails } from './more-details.js';
import { advertisementsSlider } from './sliders.js';
import { vacationsSlider } from './sliders.js';
import { initMaskTel } from './masks.js';
import { initMaskDate } from './masks.js';
import { initNumWindow } from './number-window.js';
import { initUp } from './up.js';

document.addEventListener('DOMContentLoaded', () => {
  initModal();
  initAccordion();
  advertisementsSlider();
  vacationsSlider();
  initMaskTel();
  initMaskDate();
  initNumWindow();
  initUp();
});

window.showFullText = showFullText;
window.showAgeDetails = showAgeDetails;


