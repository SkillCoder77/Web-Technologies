const form = document.querySelector('#registration-form');
const rollNumber = document.querySelector('#roll');
const rollLabel = document.querySelector('#roll-label');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const hasRollNumber = /^\d{4}-\d{2}-\d{3}-\d{3}$/.test(rollNumber.value.trim());
  rollLabel.style.color = hasRollNumber ? '' : 'crimson';

  if (!hasRollNumber) {
    message.textContent = 'Enter a roll number in the shown format.';
    rollNumber.focus();
    return;
  }

  if (!password.value || password.value !== confirmPassword.value) {
    message.textContent = 'Enter matching passwords.';
    confirmPassword.focus();
    return;
  }

  message.textContent = 'The form is valid.';
});

rollNumber.addEventListener('input', () => {
  rollLabel.style.color = '';
  message.textContent = '';
});

form.addEventListener('reset', () => {
  rollLabel.style.color = '';
  message.textContent = '';
});
