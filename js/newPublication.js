import {resetEffect, initEffect} from './effects.js';
import {resetScale} from './scale.js';
import { MAX_HASHTAGS_COUNT, MAX_DESCRIPTION_LENGTH } from './data.js';
import { uploadData } from './api.js';
import { onSuccess, onFail } from './submit.js';
import { isEscKey } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const imageOverlay = uploadForm.querySelector('.img-upload__overlay.hidden');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const descriptionField = uploadForm.querySelector('.text__description');
const submitBtn = uploadForm.querySelector('#upload-submit');
const userImg = uploadForm.querySelector('.img-upload__preview img');
const effects = uploadForm.querySelectorAll('.effects__preview');

const validationForm = /^#[0-9a-zа-яё]{1,19}$/i;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload--invalid',
  successClass: 'img-upload--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const validateHashtagsCount = (value) => value.trim().split(' ').length <= MAX_HASHTAGS_COUNT;

export const onDocumentKeydown = (evt) =>{
  if(isEscKey(evt) && !document.body.querySelector('.error')){
    evt.preventDefault();
    closeOverlay();
  }
};

const validateHashtagsUniqueness = (value) => {
  const hashtags = value.split(' ');
  const hashTagMap = {};
  for (let i = 0; i < hashtags.length; i++) {
    const hashtag = hashtags[i];
    if (hashtag in hashTagMap) {
      return false;
    }
    hashTagMap[hashtag] = true;
  }
  return true;
};

const validHashtages = (value) => {
  if (value.length === 0) {
    return true;
  }
  const hashtags = value.trim().split(' ');
  for (let i = 0; i < hashtags.length; ++i) {
    if (!validationForm.test(hashtags[i])) {
      return false;
    }
  }
  return true;
};

pristine.addValidator(
  hashtagsField,
  validateHashtagsCount,
  'Максимальное количество хэштегов - 5'
);

pristine.addValidator(
  hashtagsField,
  validateHashtagsUniqueness,
  'Не должно быть повторяющихся хэштегов'
);

pristine.addValidator(
  hashtagsField,
  validHashtages,
  'Ошибка хештега'
);

const validateDescription = (value) => value.trim().length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(
  descriptionField,
  validateDescription,
  'Описание не может быть больше 140 символов'
);

export function closeOverlay(){
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadInput.value = null;
  pristine.reset();
  resetEffect();
  resetScale();
  uploadForm.reset();
  hashtagsField.textContent = '';
  descriptionField.textContent = '';
  submitBtn.removeAttribute('disabled');
}

function openOverlay() {
  initEffect();
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closeOverlay);

  document.addEventListener('keydown', onDocumentKeydown);
}

uploadInput.addEventListener('change', openOverlay);

hashtagsField.addEventListener('input', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (!isValid) {
    submitBtn.setAttribute('disabled', true);
  }
  else{
    submitBtn.removeAttribute('disabled');
  }
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  uploadData(onSuccess, onFail, 'POST', formData);
});

descriptionField.addEventListener('input', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (!isValid) {
    submitBtn.setAttribute('disabled', true);
  }
  else{
    submitBtn.removeAttribute('disabled');
  }
});
