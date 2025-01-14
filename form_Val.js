// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const formContainer = document.querySelector('.form-container');
const inputs = document.querySelectorAll('input, select, textarea');
const button = document.querySelector('button');


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    formContainer.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    inputs.forEach(input => input.classList.toggle('dark-mode'));
});

// Name , FatherName , MotherName
const submitBtn = document.getElementById("submitBtn");

const fullNameInput = document.getElementById("Name");
const fullNameSmall = document.getElementById("nameError");

const fatherNameInput = document.getElementById("fatherName");
const fatherNameSmall = document.getElementById("fatherNameError");

const motherNameInput = document.getElementById("motherName");
const motherNameSmall = document.getElementById("mothernameError");

function validateField(inputElement, errorElement, fieldName) {
  const value = inputElement.value.trim();
  const regex = /^[A-Za-z\s]{3,50}$/;

  if (value === "") {
    errorElement.textContent = `${fieldName} cannot be empty.`;
    return false;
  } else if (!regex.test(value)) {
    errorElement.textContent = `${fieldName} must be 3-50 characters long and contain only alphabets and spaces.`;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}
function setupRealTimeValidation(inputElement, errorElement, fieldName) {
  inputElement.addEventListener("input", () => {
    validateField(inputElement, errorElement, fieldName);
  });
}
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateField(Name, nameError, "Name")) {
    isValid = false;
  }
  if (!validateField(fatherName, fatherNameError, "Father Name")) {
    isValid = false;
  }
  if (!validateField(motherName, motherNameError, "Mother Name")) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});

setupRealTimeValidation(Name, nameError, "Name");
setupRealTimeValidation(fatherName, fatherNameError, "Father Name");
setupRealTimeValidation(motherName, motherNameError, "Mother Name");

//Email
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailValue) {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent =
      "Enter a valid email address (e.g., example@domain.com).";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}
emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailValue) {
    emailError.textContent = "Email is required.";
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent =
      "Enter a valid email address (e.g., example@domain.com).";
  } else {
    emailError.textContent = "";
  }
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateEmail()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Password
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const form = document.getElementById("passwordForm");

const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 12;

passwordInput.addEventListener("input", () => {
  const passwordValue = passwordInput.value;

  if (passwordValue.length < PASSWORD_MIN_LENGTH) {
    passwordError.textContent = `Password must be at least ${PASSWORD_MIN_LENGTH} to ${PASSWORD_MAX_LENGTH} characters.`;
  } else if (passwordValue.length > PASSWORD_MAX_LENGTH) {
    passwordError.textContent = `Password must not exceed ${PASSWORD_MAX_LENGTH} characters.`;
  } else {
    passwordError.textContent = "";
  }
});
confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmError.textContent = "Passwords do not match.";
  } else {
    confirmError.textContent = "";
  }
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;

  if (!passwordInput.value) {
    passwordError.textContent = "Password cannot be empty.";
    isValid = false;
  }

  if (
    passwordInput.value.length < PASSWORD_MIN_LENGTH ||
    passwordInput.value.length > PASSWORD_MAX_LENGTH
  ) {
    passwordError.textContent = `Password must be between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} characters.`;
    isValid = false;
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (!confirmPasswordInput.value) {
    confirmError.textContent = "Confirm Password cannot be empty.";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault(); 
  }
});

//Phone Number
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const phonePattern = /^[0-9]{10}$/; 

phoneInput.addEventListener("input", () => {
  const phoneValue = phoneInput.value;

  if (!/^\d*$/.test(phoneValue)) {
    phoneError.textContent = "Phone number can only contain digits.";
  }
  else if (phoneValue.length > 10) {
    phoneError.textContent = "Phone number must not exceed 10 digits.";
  } else {
    phoneError.textContent = ""; 
  }
});
submitBtn.addEventListener("click", function (event) {
  const phoneValue = phoneInput.value;

  if (!phoneValue) {
    phoneError.textContent = "Phone number cannot be empty.";
    e.preventDefault(); 
  } else if (!phonePattern.test(phoneValue)) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    e.preventDefault(); 
  }
});

//age
const ageInput = document.getElementById("age");
const ageError = document.getElementById("ageError");

const MIN_AGE = 18;
const MAX_AGE = 99;

ageInput.addEventListener("input", () => {
  const ageValue = parseInt(ageInput.value, 10);

  if (isNaN(ageValue)) {
    ageError.textContent = "Age must be a number.";
  } else if (ageValue < MIN_AGE) {
    ageError.textContent = `Age must be at least ${MIN_AGE}.`;
  } else if (ageValue > MAX_AGE) {
    ageError.textContent = `Age must not exceed ${MAX_AGE}.`;
  } else {
    ageError.textContent = ""; 
  }
});
submitBtn.addEventListener("click", function (event) {
  const ageValue = parseInt(ageInput.value, 10);

  if (!ageInput.value) {
    ageError.textContent = "Age cannot be empty.";
    e.preventDefault(); 
  } else if (isNaN(ageValue) || ageValue < MIN_AGE || ageValue > MAX_AGE) {
    ageError.textContent = `Age must be between ${MIN_AGE} and ${MAX_AGE}.`;
    e.preventDefault(); 
  }
});

//Gender
const genderSelect = document.getElementById("gender");
const genderSmall = document.getElementById("genderError");
function validateGender() {
  const genderValue = genderSelect.value.trim();

  if (genderValue === "") {
    genderSmall.textContent = "Please select your gender.";
    genderSmall.style.color = "red";
    return false;
  } else {
    genderSmall.textContent = "";
    return true;
  }
}
genderSelect.addEventListener("change", () => {
  validateGender();
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateGender()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Date of birth
const dobInput = document.getElementById("dob");
const dobSmall = document.getElementById("dobError");

function validateDOB() {
  const dobValue = dobInput.value.trim();
  const today = new Date();
  const selectedDate = new Date(dobValue);

  if (dobValue === "") {
    dobSmall.textContent = "Date of Birth cannot be empty.";
    return false;
  } else if (selectedDate >= today) {
    dobSmall.textContent = "Date of Birth must be in the past.";
    return false;
  } else {
    dobSmall.textContent = "";
    return true;
  }
}
dobInput.addEventListener("input", () => {
  validateDOB();
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateDOB()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//School , Pecentage
const schoolInput = document.getElementById("school12");
const schoolError = document.getElementById("schoolError");
const percentageInput = document.getElementById("percentage12");
const percentageError = document.getElementById("percentageError");

const schoolPattern = /^[A-Za-z\s]+$/; 
const MIN_SCHOOL_LENGTH = 5; 
const MAX_SCHOOL_LENGTH = 50; 
const MIN_PERCENTAGE = 0;
const MAX_PERCENTAGE = 100;
schoolInput.addEventListener("input", () => {
  const schoolValue = schoolInput.value;

  if (schoolValue.length < MIN_SCHOOL_LENGTH) {
    schoolError.textContent = `School name must be at least ${MIN_SCHOOL_LENGTH} characters long.`;
  } else if (schoolValue.length > MAX_SCHOOL_LENGTH) {
    schoolError.textContent = `School name must not exceed ${MAX_SCHOOL_LENGTH} characters.`;
  } else if (!schoolPattern.test(schoolValue)) {
    schoolError.textContent =
      "School name can only contain letters and spaces.";
  } else {
    schoolError.textContent = ""; 
  }
});
percentageInput.addEventListener("input", () => {
  const percentageValue = parseFloat(percentageInput.value);

  if (isNaN(percentageValue)) {
    percentageError.textContent = "Percentage must be a number.";
  } else if (percentageValue < MIN_PERCENTAGE) {
    percentageError.textContent = `Percentage cannot be less than ${MIN_PERCENTAGE}.`;
  } else if (percentageValue > MAX_PERCENTAGE) {
    percentageError.textContent = `Percentage cannot exceed ${MAX_PERCENTAGE}.`;
  } else {
    percentageError.textContent = ""; 
  }
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;

  // Validate school name
  const schoolValue = schoolInput.value;
  if (!schoolValue) {
    schoolError.textContent = "School name cannot be empty.";
    isValid = false;
  } else if (schoolValue.length < MIN_SCHOOL_LENGTH) {
    schoolError.textContent = `School name must be at least ${MIN_SCHOOL_LENGTH} characters long.`;
    isValid = false;
  } else if (schoolValue.length > MAX_SCHOOL_LENGTH) {
    schoolError.textContent = `School name must not exceed ${MAX_SCHOOL_LENGTH} characters.`;
    isValid = false;
  } else if (!schoolPattern.test(schoolValue)) {
    schoolError.textContent =
      "School name can only contain letters and spaces.";
    isValid = false;
  }

  // Validate percentage
  const percentageValue = parseFloat(percentageInput.value);
  if (!percentageInput.value) {
    percentageError.textContent = "Percentage cannot be empty.";
    isValid = false;
  } else if (
    isNaN(percentageValue) ||
    percentageValue < MIN_PERCENTAGE ||
    percentageValue > MAX_PERCENTAGE
  ) {
    percentageError.textContent = `Percentage must be between ${MIN_PERCENTAGE} and ${MAX_PERCENTAGE}.`;
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault(); 
  }
});

//Aadhar card Number
const aadharNoInput = document.getElementById("aadharNo");
const aadharNoError = document.getElementById("aadharNoError");

const AADHAR_PATTERN = /^[0-9]{12}$/;
aadharNoInput.addEventListener("input", () => {
  validateAadhar();
});
function validateAadhar() {
  const aadharValue = aadharNoInput.value.trim();

  if (aadharValue === "") {
    aadharNoError.textContent = "Aadhar card number is required.";
    return false;
  } else if (!AADHAR_PATTERN.test(aadharValue)) {
    aadharNoError.textContent = "Please enter a valid 12-digit Aadhar number.";
    return false;
  } else {
    aadharNoError.textContent = ""; 
    return true;
  }
}
submitBtn.addEventListener("click", function (event) {
  const isValid = validateAadhar();
  if (!isValid) {
    e.preventDefault(); 
  }
});

//Bank Account Number
const bankNoInput = document.getElementById("bankNo");
const bankNoError = document.getElementById("bankNoError");
function validateBankAccountNumber() {
  const value = bankNoInput.value.trim();
  const bankNoPattern = /^[0-9]{9,18}$/;
  if (value === "") {
    bankNoError.textContent = "Bank Account Number cannot be empty.";
    return false;
  } else if (!bankNoPattern.test(value)) {
    bankNoError.textContent =
      "Please enter a valid bank account number (9 to 18 digits).";
    return false;
  } else {
    bankNoError.textContent = "";
    return true;
  }
}
bankNoInput.addEventListener("input", validateBankAccountNumber);
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateBankAccountNumber()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Blood Group
const bloodGroupInput = document.getElementById("bloodGroup");
const bloodGroupSmall = document.getElementById("bGroupError");
function validateBloodGroup() {
  const bloodGroupValue = bloodGroupInput.value.trim();
  if (bloodGroupValue === "") {
    bloodGroupSmall.textContent = "Blood Group is required.";
    bloodGroupSmall.style.color = "red";
    return false;
  }
  const pattern = /^(A|B|AB|O)[+-]$/;
  if (!pattern.test(bloodGroupValue)) {
    bloodGroupSmall.textContent = "Enter a valid Blood Group (e.g., A+, O-).";
    bloodGroupSmall.style.color = "red";
    return false;
  }
  bloodGroupSmall.textContent = "";
  return true;
}
bloodGroupInput.addEventListener("input", validateBloodGroup);
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateBloodGroup()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Address , City , State
const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");

const addressError = document.getElementById("addressError");
const cityError = document.getElementById("cityError");
const stateError = document.getElementById("stateError");

const MAX_ADDRESS_LENGTH = 100; 
const MAX_CITY_LENGTH = 50; 
const MAX_STATE_LENGTH = 50; 

const NAME_PATTERN = /^[A-Za-z\s]+$/; 

// Validate Address
function validateAddress() {
  const addressValue = addressInput.value.trim();
  if (addressValue === "") {
    addressError.textContent = "Address is required.";
    return false;
  } else if (addressValue.length > MAX_ADDRESS_LENGTH) {
    addressError.textContent = `Address must not exceed ${MAX_ADDRESS_LENGTH} characters.`;
    return false;
  } else {
    addressError.textContent = "";
    return true;
  }
}

// Validate City
function validateCity() {
  const cityValue = cityInput.value.trim();
  if (cityValue === "") {
    cityError.textContent = "City is required.";
    return false;
  } else if (!NAME_PATTERN.test(cityValue)) {
    cityError.textContent = "City can only contain letters and spaces.";
    return false;
  } else if (cityValue.length > MAX_CITY_LENGTH) {
    cityError.textContent = `City must not exceed ${MAX_CITY_LENGTH} characters.`;
    return false;
  } else {
    cityError.textContent = "";
    return true;
  }
}

// Validate State
function validateState() {
  const stateValue = stateInput.value.trim();
  if (stateValue === "") {
    stateError.textContent = "State is required.";
    return false;
  } else if (!NAME_PATTERN.test(stateValue)) {
    stateError.textContent = "State can only contain letters and spaces.";
    return false;
  } else if (stateValue.length > MAX_STATE_LENGTH) {
    stateError.textContent = `State must not exceed ${MAX_STATE_LENGTH} characters.`;
    return false;
  } else {
    stateError.textContent = "";
    return true;
  }
}
addressInput.addEventListener("input", validateAddress);
cityInput.addEventListener("input", validateCity);
stateInput.addEventListener("input", validateState);

submitBtn.addEventListener("click", function (event) {
  const isAddressValid = validateAddress();
  const isCityValid = validateCity();
  const isStateValid = validateState();

  if (!isAddressValid || !isCityValid || !isStateValid) {
    e.preventDefault(); 
  }
});

//Country
const nationalitySelect = document.getElementById("country");
const nationalitySmall = document.getElementById("countryError");
function validateNationality() {
  const nationalityValue = nationalitySelect.value.trim();
  if (nationalityValue === "") {
    nationalitySmall.textContent = "Please select your nationality.";
    nationalitySmall.style.color = "red";
    return false;
  } else {
    nationalitySmall.textContent = "";
    return true;
  }
}
nationalitySelect.addEventListener("change", () => {
  validateNationality();
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateNationality()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Language
const language = document.getElementById("language");
const languageError = document.getElementById("languageError");
function validateLanguage() {
  const languageValue = language.value.trim();
  if (languageValue === "") {
    languageError.textContent = "Please select your Language.";
    languageError.style.color = "red";
    return false;
  } else {
    languageError.textContent = "";
    return true;
  }
}
language.addEventListener("change", () => {
  validateLanguage();
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateLanguage()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Hobbies
const hobbiesInput = document.getElementById("Hobbies");
const hobbiesError = document.getElementById("hobbiesError");
function validateHobbies() {
  const hobbiesValue = hobbiesInput.value.trim();
  if (!hobbiesValue) {
    hobbiesError.textContent = "Hobbies are required.";
    return false;
  } else if (hobbiesValue.length < 10) {
    hobbiesError.textContent =
      "Please describe your hobbies in at least 10 characters.";
    return false;
  } else {
    hobbiesError.textContent = "";
    return true;
  }
}
hobbiesInput.addEventListener("input", function () {
  const hobbiesValue = hobbiesInput.value.trim();
  if (!hobbiesValue) {
    hobbiesError.textContent = "Hobbies are required.";
  } else if (hobbiesValue.length < 10) {
    hobbiesError.textContent =
      "Please describe your hobbies in at least 10 characters.";
  } else {
    hobbiesError.textContent = "";
  }
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateHobbies()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Marital Status
const maritalStatusInputs = document.getElementsByName("maritalStatus");
const statusError = document.getElementById("statusError");

function validateMaritalStatus() {
  const isChecked = Array.from(maritalStatusInputs).some(
    (input) => input.checked
  );

  if (!isChecked) {
    statusError.textContent = "Marital Status is required.";
    return false;
  } else {
    statusError.textContent = "";
    return true;
  }
}
maritalStatusInputs.forEach((input) => {
  input.addEventListener("change", validateMaritalStatus);
});
submitBtn.addEventListener("click", function (event) {
  const isValid = validateMaritalStatus();
  if (!isValid) {
    e.preventDefault(); 
  }
});

//Employement Status
const employment = document.getElementById("employment");
const employmentError = document.getElementById("employmentError");
function validateEmployment() {
  const employmentValue = employment.value.trim();
  if (employmentValue === "") {
    employmentError.textContent = "Please select your Employment Status.";
    employmentError.style.color = "red";
    return false;
  } else {
    employmentError.textContent = "";
    return true;
  }
}
employment.addEventListener("change", () => {
  validateEmployment();
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateEmployment()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//LinkedIn
const linkedinInput = document.getElementById("linkedin");
const linkedError = document.getElementById("linkedError");
function validateLinkedIn() {
  const linkedValue = linkedinInput.value.trim();
  const linkedPattern = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
  if (!linkedValue) {
    linkedError.textContent = "LinkedIn Profile URL is required.";
    return false;
  } else if (!linkedPattern.test(linkedValue)) {
    linkedError.textContent =
      "Enter a valid LinkedIn Profile URL (e.g., https://www.linkedin.com/...).";
    return false;
  } else {
    linkedError.textContent = "";
    return true;
  }
}
linkedinInput.addEventListener("input", function () {
  const linkedValue = linkedinInput.value.trim();
  const linkedPattern = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
  if (!linkedValue) {
    linkedError.textContent = "LinkedIn Profile URL is required.";
  } else if (!linkedPattern.test(linkedValue)) {
    linkedError.textContent =
      "Enter a valid LinkedIn Profile URL (e.g., https://www.linkedin.com/...).";
  } else {
    linkedError.textContent = "";
  }
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateLinkedIn()) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});

//Github
const githubInput = document.getElementById("github");
const githubError = document.getElementById("githubError");
function validateGitHub() {
  const githubValue = githubInput.value.trim();
  const githubPattern = /^https:\/\/(www\.)?github\.com\/[A-Za-z0-9-]+$/;
  if (!githubValue) {
    githubError.textContent = "GitHub Profile URL is required.";
    return false;
  } else if (!githubPattern.test(githubValue)) {
    githubError.textContent =
      "Enter a valid GitHub Profile URL (e.g., https://github.com/username).";
    return false;
  } else {
    githubError.textContent = "";
    return true;
  }
}
githubInput.addEventListener("input", function () {
  const githubValue = githubInput.value.trim();
  const githubPattern = /^https:\/\/(www\.)?github\.com\/[A-Za-z0-9-]+$/;

  if (!githubValue) {
    githubError.textContent = "GitHub Profile URL is required.";
  } else if (!githubPattern.test(githubValue)) {
    githubError.textContent =
      "Enter a valid GitHub Profile URL (e.g., https://github.com/username).";
  } else {
    githubError.textContent = "";
  }
});
submitBtn.addEventListener("click", function (event) {
  let isValid = true;
  if (!validateGitHub()) {
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});

//Skills
const skillsInputs = document.getElementsByName("skills");
const skillsError = document.getElementById("skillsError");

function validateSkills() {
  const isChecked = Array.from(skillsInputs).some((input) => input.checked);

  if (!isChecked) {
    skillsError.textContent = "Please select at least one skill.";
    return false;
  } else {
    skillsError.textContent = "";
    return true;
  }
}
skillsInputs.forEach((input) => {
  input.addEventListener("change", validateSkills);
});
submitBtn.addEventListener("click", function (event) {
  const isValid = validateSkills();
  if (!isValid) {
    e.preventDefault(); 
  }
});

