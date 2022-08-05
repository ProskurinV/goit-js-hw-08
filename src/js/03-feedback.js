import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

localData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function localData() {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));

  const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedSettings = JSON.parse(savedSettings);

  console.log(parsedSettings);

  if (formData) {
    formData;
  }
}
