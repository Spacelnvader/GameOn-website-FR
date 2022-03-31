function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll("span.close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Below Function Executes On Form Submit
function validate() {
  // Storing Field Values In Variables
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const birthDate = document.getElementById("birthDate").value;
  const numberOfTournament = document.getElementById("quantity").value;
  const radioButtonsLocation = document.querySelectorAll('input[name="location"]');
  

  // Regular Expression For Email
  var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

  // Conditions
  if (firstName != '' && lastName != '' && email != '' && birthDate != '' && numberOfTournament != '') {
  if (email.match(emailReg)) {
  if(radioButtonsLocation.checked) {
  alert("Inscription enregistrée !");
  return true;
  } else {
      alert("Choisissez un lieu pour le tournoi de cette année ");
      return false;
  }
  } else {
      alert("Adresse e-mail invalide");
      return false;
  }
  } else {
      alert("Tous les champs doivent être complété");
      return false;
  }
  }
