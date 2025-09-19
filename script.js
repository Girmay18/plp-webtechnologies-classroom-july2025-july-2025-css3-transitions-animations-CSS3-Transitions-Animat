// Scroll to registration form
document.getElementById('scrollRegister').addEventListener('click', () => {
  document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
});

// Password toggle functionality
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  if(passwordField.type === 'password') {
    passwordField.type = 'text';
    togglePassword.textContent = 'Hide';
  } else {
    passwordField.type = 'password';
    togglePassword.textContent = 'Show';
  }
});

// Form validation function
const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  validateForm();
});

// Instant feedback for all fields
const nameField = document.getElementById('name');
nameField.addEventListener('input', () => {
  const regex = /^[a-zA-Z\s]+$/; // Only letters and spaces
  if(!regex.test(nameField.value)) {
    document.getElementById('nameError').textContent = 'Only letters allowed!';
  } else {
    document.getElementById('nameError').textContent = '';
  }
});

const emailField = document.getElementById('email');
emailField.addEventListener('input', () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regex.test(emailField.value)) {
    document.getElementById('emailError').textContent = 'Invalid email!';
  } else {
    document.getElementById('emailError').textContent = '';
  }
});

const phoneField = document.getElementById('phone');
phoneField.addEventListener('input', () => {
  const regex = /^[0-9]{10}$/;
  if(!regex.test(phoneField.value)) {
    document.getElementById('phoneError').textContent = 'Enter 10 digit number!';
  } else {
    document.getElementById('phoneError').textContent = '';
  }
});

const ageField = document.getElementById('age');
ageField.addEventListener('input', () => {
  if(ageField.value < 1 || ageField.value > 120) {
    document.getElementById('ageError').textContent = 'Enter a valid age!';
  } else {
    document.getElementById('ageError').textContent = '';
  }
});

const vaccineField = document.getElementById('vaccine');
vaccineField.addEventListener('change', () => {
  if(vaccineField.value === '') {
    document.getElementById('vaccineError').textContent = 'Please select a vaccine.';
  } else {
    document.getElementById('vaccineError').textContent = '';
  }
});

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', () => {
  if(passwordInput.value.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be 6+ characters.';
  } else {
    document.getElementById('passwordError').textContent = '';
  }
});

// Form validation on submit
function validateForm() {
  let valid = true;

  // Name validation
  if(!/^[a-zA-Z\s]+$/.test(nameField.value)) {
    document.getElementById('nameError').textContent = 'Only letters allowed!';
    valid = false;
  }

  // Email validation
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    document.getElementById('emailError').textContent = 'Invalid email!';
    valid = false;
  }

  // Phone validation
  if(!/^[0-9]{10}$/.test(phoneField.value)) {
    document.getElementById('phoneError').textContent = 'Enter 10 digit number!';
    valid = false;
  }

  // Age validation
  if(ageField.value < 1 || ageField.value > 120) {
    document.getElementById('ageError').textContent = 'Enter a valid age!';
    valid = false;
  }

  // Vaccine validation
  if(vaccineField.value === '') {
    document.getElementById('vaccineError').textContent = 'Please select a vaccine.';
    valid = false;
  }

  // Password validation
  if(passwordInput.value.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be 6+ characters.';
    valid = false;
  }

  if(valid) {
    successMessage.textContent = 'Registration Successful!';
    form.reset();
  } else {
    successMessage.textContent = '';
  }
}

// Animated counters for dashboard
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.textContent;
    const increment = Math.ceil(target / 100);

    if (count < target) {
      counter.textContent = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.textContent = target;
    }
  };
  updateCount();
});
