// Example script for form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  if (nameInput.value === '') {
    alert('Please enter your name.');
    event.preventDefault();
  }

  if (emailInput.value === '') {
    alert('Please enter your email address.');
    event.preventDefault();
  }
});