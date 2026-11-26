const form = document.querySelector('#registration-form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  confirmPassword.setCustomValidity(
    password.value === confirmPassword.value ? '' : 'Passwords must match.',
  );

  if (!form.reportValidity()) {
    event.preventDefault();
    message.textContent = 'Please correct the highlighted fields.';
    return;
  }

  event.preventDefault();
  message.textContent = 'The registration details are valid.';
});

confirmPassword.addEventListener('input', () => {
  confirmPassword.setCustomValidity('');
  message.textContent = '';
});

form.addEventListener('reset', () => {
  message.textContent = '';
});
