// DOM elements
const modal = document.getElementById('contact_modal');
const first = document.getElementById('firstname');
const last = document.getElementById('lastname');
const email = document.getElementById('email');
const message = document.getElementById('message');


// Error messages
const ErrorFirstNameMinimumCharacters =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const ErrorFirstName = "Veuillez entrer des caractères autorisés.";
const ErrorLastNameMinimumCharacters =
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ErrorLastName = "Veuillez entrer des caractères autorisés.";
const ErrorEmail = "L'adresse électronique n'est pas valide.";
const ErrorMessage = "Le message doit contenir entre 5 et 150 caractères.";

// REGEX
const nameFormat = /^([A-Za-zÀ-ÖØ-öø-ÿ-' ])+$/;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/**
 * Show error message function
 * @param {HTMLElement} input
 * @param {*} message
 */
 const showError = (input, message) => {
    input.parentElement.lastElementChild.innerHTML = message;
    input.classList.add("error");
  };
  /**
   * hide error message function
   * @param {HTMLElement} input
   */
  const hideError = (input) => {
    input.parentElement.lastElementChild.innerHTML = "";
    input.classList.remove("error");
  };

// open contact form
function displayModal() {
	modal.style.display = "flex";
    modal.style.justifyContent = "center";
}

// close contact form
function closeModal() {
    modal.style.display = "none";
};

// affecte la variable 
document.displayModal = displayModal;
document.closeModal = closeModal;

// displayModal = () => {
//     const modal = document.getElementById("contact_modal");

//     document.querySelector('.contact_button').addEventListener(click, () => {
//         modal.style.display = 'block';
//     });
// };

// export { displayModal }


// Form Submit Event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    validateForm();
  });

  /**
 * FIRST NAME check and validation
 * @returns true or false
 */
const checkFirstName = () => {
    // checking input live while typing
    first.addEventListener("input", checkFirstName);
    // checking input value
    let value = firstname.value.trim();
    if (!value || value.length < 2) {
      showError(firstname, ErrorFirstNameMinimumCharacters);
      return false;
    } else if (!value.match(nameFormat)) {
      showError(firstname, ErrorFirstName);
      return false;
    } else {
      hideError(firstname);
      return true;
    }
  };

  /**
 * LAST NAME check and validation
 * @returns true or false
 */
const checkLastName = () => {
    // checking input live while typing
    last.addEventListener("input", checkLastName);
    // checking input value
    let value = lastname.value.trim();
    if (!value || value.length < 2) {
      showError(lastname, ErrorLastNameMinimumCharacters);
      return false;
    } else if (!value.match(nameFormat)) {
      showError(lastname, ErrorLastName);
      return false;
    } else {
      hideError(lastname);
      return true;
    }
  };

  /**
 * EMAIL check and validation
 * @returns true or false
 */
const checkEmail = () => {
    // checking input live while typing
    email.addEventListener("input", checkEmail);
    // checking input value
    let value = email.value.trim();
    if (!value || !value.match(mailformat)) {
      showError(email, ErrorEmail);
      return false;
    } else {
      hideError(email);
      return true;
    }
  };

    /**
 * MESSAGE check and validation
 * @returns true or false
 */
const checkMessage = () => {
    // checking input live while typing
    message.addEventListener("input", checkMessage);
    // checking input value
    let value = message.value.trim();
    if (!value || value.length < 5 || value.length > 150) {
      showError(message, ErrorMessage);
      return false;
    } else {
      hideError(message);
      return true;
    }
  };

  /**
 * Check whether all form inputs return true value - if so, display thank you message
 */
function validateForm() {
    let boolFirstName = checkFirstName();
    let boolLastName = checkLastName();
    let boolEmail = checkEmail();
    let boolMessage = checkMessage();
  

    if (
        boolFirstName &&
        boolLastName &&
        boolEmail &&
        boolMessage
    ) {
        console.log(firstname.value, lastname.value, email.value, message.value);
        closeModal();
    } 
    
  }