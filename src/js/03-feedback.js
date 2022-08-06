import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

upDatedDataFromLocalData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const emeil = document.querySelector('input');
  const message = document.querySelector('textarea');
  if (emeil.value === '' || message.value === '') {
    alert(`Все поля должны быть заполненны`);
  } else {
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    // formData = {};
    console.log(formData);
  }
}

function upDatedDataFromLocalData() {
  let saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (saveData) {
    Object.entries(saveData).forEach(([key, value]) => {
      formData[key] = value;
      form.elements[key].value = value;
      console.log(saveData);
    });
  }
}
