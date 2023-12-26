import { debounce, shuffle } from './util.js';
import { getRenderedCards, removeRenderedCards } from './module.js';
import { cards } from './main.js';
import { RANDOM_PICTURES_MAX } from './data.js';

const filtersForm = document.querySelector('.img-filters__form');
let currentActiveBtn = document.querySelector('.img-filters__button--active');

const Filters = {
  'filter-default': () => cards.slice(),
  'filter-random': () => shuffle(cards.slice()).slice(0, RANDOM_PICTURES_MAX),
  'filter-discussed': () => cards.slice().sort((first, second) => second.comments.length - first.comments.length ),
};

const applyFilters = (filterName) =>{
  removeRenderedCards();
  getRenderedCards(Filters[filterName]());
};


const toogleButtons = (evt) => {
  currentActiveBtn.classList.remove('img-filters__button--active');
  currentActiveBtn = evt.target;
  currentActiveBtn.classList.add('img-filters__button--active');
};

const onFilterFormClick = debounce((evt) => {
  evt.preventDefault();
  if(evt.target.type === 'button'){
    applyFilters(evt.target.id);
    toogleButtons(evt);
  }
});

filtersForm.addEventListener('click', onFilterFormClick);
