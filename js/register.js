const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phoneNumber = document.getElementById('phone').value;
  const male = document.getElementById('male');
  const female = document.getElementById('female');
  const agreeCheck = document.getElementById('agree');

  let emailError = document.getElementById('email-error');
  let passwordError = document.getElementById('password-error');
  let phoneError = document.getElementById('phone-error');
  let genderError = document.getElementById('gender-error');
  let agreeError = document.getElementById('agree-error');

  if (email === '') {
    emailError.innerHTML = 'Email is required';
  } else if (!email.includes('@') || !email.includes('.')) {
    emailError.innerHTML = 'Please enter a valid email';
  } else if (email.startsWith('@') || email.startsWith('.')) {
    emailError.innerHTML = 'Email cannot be start with @ or .';
  } else if (email.includes(' ')) {
    emailError.innerHTML = 'Email cannot contain spaces';
  } else {
    emailError.innerHTML = '';
  }

  if (password === '') {
    passwordError.innerHTML = 'Password is required';
  } else if (password.length < 8) {
    passwordError.innerHTML = 'Password must be at least 8 characters';
  } else if (!checkPassword(password)) {
    passwordError.innerHTML = 'Password must be alphanumeric';
  } else {
    passwordError.innerHTML = '';
  }

  if (phoneNumber === '') {
    phoneError.innerHTML = 'Phone number is required';
  } else if (phoneNumber.length < 9 || phoneNumber.length > 12) {
    phoneError.innerHTML = 'Phone number must be between 9 and 12 digits';
  } else if (isNaN(phoneNumber)) {
    phoneError.innerHTML = 'Please enter a valid phone number';
  } else {
    phoneError.innerHTML = '';
  }

  if (!male.checked && !female.checked) {
    genderError.innerHTML = 'Gender must be selected';
  } else {
    genderError.innerHTML = '';
  }

  if (!agreeCheck.checked) {
    agreeError.innerHTML = 'Please agree to our terms and conditions';
  } else {
    agreeError.innerHTML = '';
  }

  if (emailError.innerHTML === '' && passwordError.innerHTML === '' && phoneError.innerHTML === '' && genderError.innerHTML === '' && agreeError.innerHTML === '') {
    let modal = document.getElementById('modal');
    let modalBtn = document.getElementById('modal-btn');
    modal.style.display = 'flex';
    modalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      form.submit();
      form.reset();
      emailError.innerHTML = '';
      passwordError.innerHTML = '';
      phoneError.innerHTML = '';
      genderError.innerHTML = '';
      agreeError.innerHTML = '';
    });
  }
});

function checkPassword(password) {
  let hasLetter = false;
  let hasNumber = false

  for (let i = 0; i < password.length; i++) {
    isNaN(password[i]) ? hasLetter = true : hasNumber = true;
  }
  return hasLetter && hasNumber;
}