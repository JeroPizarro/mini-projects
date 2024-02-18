// Get Dom elements
const form = document.getElementById('form');
const fieldUsername = document.getElementById('username');
const fieldEmail = document.getElementById('email');
const fieldPassword = document.getElementById('password');
const fieldPassword2 = document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');

  formControl.className = 'form-control error';
  errorMessage.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
//Event tied to from
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (fieldUsername.value === '') {
    showError(fieldUsername, 'Username is required');
  } else {
    showSuccess(fieldUsername);
  }

  if (fieldEmail.value === '') {
    showError(fieldEmail, 'Email is required');
  } else if(!isValidEmail(fieldEmail.value)) {
    showError(fieldEmail, 'Email is incorrect');
  }else {
    showSuccess(fieldEmail);
  }

  if (fieldPassword.value === '') {
    showError(fieldPassword, 'Password is required');
  } else {
    showSuccess(fieldPassword);
  }

  if (fieldPassword2.value === '') {
    showError(fieldPassword2, 'Re-enter your password is required');
  } else {
    showSuccess(fieldPassword2);
  }
});
