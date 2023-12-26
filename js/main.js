import { loadData } from './api.js';
import { getRenderedCards } from './module.js';
<<<<<<< HEAD
import './filters.js';
export let cards = [];
const onSuccess = (data) => {
  cards = data.slice();
  getRenderedCards(cards);
};

document.querySelector('.img-filters').classList.remove('img-filters--inactive');
=======
export{ loadData } from './api.js';

const onSuccess = (data) => getRenderedCards(data.slice());
>>>>>>> bfca8f2e3511ddbb6bb429c9847cccd5b9258d8e

const onFail = () => {
  const errorMesage = document.createElement('div');
  errorMesage.style.position = 'absolute';
  errorMesage.style.left = 0;
  errorMesage.style.top = '50%';
  errorMesage.style.right = 0;

  errorMesage.style.fontSize = '16px';
  errorMesage.style.backgroundColor = 'red';
  errorMesage.style.padding = '20px';

  errorMesage.style.textAlign = 'center';
  errorMesage.textContent = 'Ошибка при загрузке изображений';
  document.body.append(errorMesage);
};

loadData(onSuccess, onFail);

