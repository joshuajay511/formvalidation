const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
})

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = confirm.value.trim();

  if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank')
  } else {
    setSuccessFor(username);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email must be valid');
  } else {
    setSuccessFor(email);
  }

  if(!isPassword(passwordValue)) {
    setErrorFor(password, 'Password must contain atleast one number and one special character');
  } else {
    setSuccessFor(password);
  }

  if(passwordValue !== confirmValue) {
    setErrorFor(confirm, 'Passwords did not match')
  } else {
    setSuccessFor(confirm);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(str) {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}