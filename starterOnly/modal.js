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


const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');



const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;


form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate() {
  if (firstName.value === '') {
    alert ('there is a problem with the first field');
  if (firstName.value === '' && firstName.lenght > 1) {
    alert ("Veuillez remplir le champ Prénom");
  } 
  else if (lastName.value === '' && lastName.lenght > 1) { 
    alert ("Veuillez remplir le champ Nom");
  } 
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    alert ("Veuillez remplir le champ email");
  }
  else if (!birthDate.value.match(dateFormat)) { 
    alert ("Veuillez indiquer votre date de naissance");
  }
  else if (!quantityTournament.value.match(numbers)) { 
    alert ("Veuillez indiquer le nombre de tournois");
  }
  }
}