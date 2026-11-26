const form = document.querySelector('#address-form');
const nameInput = document.querySelector('#student-name');
const phoneInput = document.querySelector('#phone');
const contactAddress = document.querySelector('#contact-address');
const permanentAddress = document.querySelector('#permanent-address');
const message = document.querySelector('#event-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = form.reportValidity()
    ? 'Form submitted.'
    : 'Please enter your name before submitting.';
});

form.addEventListener('reset', () => {
  message.textContent = 'Form cleared.';
  phoneInput.style.color = '';
});

phoneInput.addEventListener('focus', () => {
  phoneInput.style.color = 'crimson';
});

phoneInput.addEventListener('blur', () => {
  phoneInput.style.color = '';
});

document.querySelector('#copy-address').addEventListener('click', () => {
  permanentAddress.value = contactAddress.value;
  message.textContent = 'Contact address copied.';
});

document.querySelector('#read-instructions').addEventListener('click', () => {
  message.textContent = 'Fill in your name and contact details, then submit the form.';
});

document.querySelector('#extra-button').addEventListener('click', () => {
  message.textContent = 'The extra button was clicked.';
});

nameInput.addEventListener('blur', () => {
  if (!nameInput.value.trim()) {
    message.textContent = 'Name is required.';
  }
});
