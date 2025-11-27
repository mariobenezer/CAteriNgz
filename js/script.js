const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

const form = document.getElementById('register-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const genderInput = document.getElementById('gender');
const dobInput = document.getElementById('dob');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();
  const gender = genderInput.value;
  const dob = new Date(dobInput.value);
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const today = new Date();

  if (username === "" || email === "" || address === "" || gender === "" || dobInput.value === "" || password === "" || confirmPassword === "") {
    alert("All fields must be filled!");
    return;
  }

  if (username.length < 3 || username.length > 50 || !username.split('').every(char => /[a-zA-Z0-9]/.test(char))) {
    alert("Please enter a valid username.");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com!");
    return;
  }

  if (address.length < 5 || address.length > 100) {
    alert("Please enter a valid address.");
    return;
  }

  if (gender === "") {
    alert("Please select a gender.");
    return;
  }

  if (dob > today) {
    alert("Birth Date must be before today's date!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
    alert("Please enter a valid password.");
    return;
  }

  form.submit();
});
