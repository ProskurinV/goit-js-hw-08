import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;

  formData = { email, message };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;

  formData = { email, message };
  console.log(formData);
  localStorage.getItem(LOCALSTORAGE_KEY, JSON.parse(formData));
  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(name, value);
  // });

  localStorage.clear();
  form.reset();
}
