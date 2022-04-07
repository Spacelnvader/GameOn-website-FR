function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const form = document.querySelector("form");
const modalConfirm = document.querySelector(".confirm-modal");
const modalConfirmBtn = document.querySelector(".confirm-modal-btn");
const modalConfirmClose = document.querySelector(".confirm-close");
const confirmModal = document.getElementById("confirm-modal");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll("span.close");

//Form entries
const formEntries = {
	firstNameInput: document.getElementById("first"),
	lastNameInput: document.getElementById("last"),
	emailInput: document.getElementById("email"),
	birthdateInput: document.getElementById("birthdate"),
	quantityInput: document.getElementById("quantity"),
	radioButtons: document.getElementsByName("location"),
	checkboxInput: document.getElementById("checkbox1"),
};

//Error messages
const errorMessages = {
	lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate: "Veuillez entrer une date de naissance valide.",
	quantity: "Veuillez entrer un nombre valide.",
	location: "Veuillez choisir une ville.",
	checkbox: "Veuillez accepter les conditions d'utilisation.",
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
	form.style.display = "block";
}
// close modal form
function closeModal() {
	modalbg.style.display = "none";
}

//Invalid Alert
function isInvalid(element, message) {
	let invalidAlert = document.createElement("div");
	invalidAlert.classList.add("form-alert");
	let br = document.createElement("br");
	invalidAlert.innerHTML = message;
	if (element !== formEntries.radioButtons) {
		element.parentElement.append(invalidAlert);
		element.parentElement.append(br);
	} else {
		element[0].parentElement.append(invalidAlert);
		element[0].parentElement.append(br);
		
	}
}

//Valid Alert
function isValid() {
	form.style.display = "none";

	// close modal confirm
	function closeConfirmModal() {
		modalConfirm.style.display = "none";
	}
	modalbg.style.display = "none";
	modalConfirm.style.display = "flex";
	modalConfirmBtn.addEventListener("click", closeConfirmModal);
	modalConfirmClose.addEventListener("click", closeConfirmModal);
	
}

function firstValidation() {
	let inputValue = formEntries.firstNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
	
}
function lastValidation() {
	let inputValue = formEntries.lastNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

function emailValidation() {
	let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
	return regex.test(formEntries.emailInput.value);
}

function birthdateValidation() {
	let inputValue = formEntries.birthdateInput.value;
	if (isNaN(inputValue)) return true;
	else return false;
}

function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(formEntries.quantityInput.value);
}

function locationValidation() {
	let radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
	for (let radio of radioButtons) {
		if (radio.checked === true) return true;
	}
	return false;
}

function checkboxValidation() {
	let inputValue = document.getElementById("checkbox1").checked;
	return inputValue;

}

// removes previous alerts
function removeAlerts() {
	let alertBoxes = document.querySelectorAll(".form-alert");
	if (alertBoxes.length > 0) {
		for (let alert of alertBoxes) {
			alert.parentNode.removeChild(alert.nextSibling);
			alert.parentNode.removeChild(alert);
		}
	}
}
//store de value of the form in an array 
formResults = [];

// this function will launch by clicking on the buttons
// it will check the form entries and will execute the function IsValid
// while incrementing the array above
document
	.getElementById("button")
	.addEventListener("click", function validate(event) {
		event.preventDefault();
		let formValid = true;
		removeAlerts();
		if (!firstValidation()) {
			formValid = false;
			isInvalid(formEntries.firstNameInput, errorMessages.firstName);
		} else {
			const firstName = formEntries.firstNameInput.value;
			formResults.splice(0, 1, firstName);
		}
		if (!lastValidation()) {
			formValid = false;
			isInvalid(formEntries.lastNameInput, errorMessages.lastName);
		} else {
			const lastName = formEntries.lastNameInput.value;
			formResults.splice(1, 1, lastName);
		}
		if (!emailValidation()) {
			formValid = false;
			isInvalid(formEntries.emailInput, errorMessages.email);
		} else {
			const eMail = formEntries.emailInput.value;
			formResults.splice(2, 1, eMail);
		}
		if (!birthdateValidation()) {
			formValid = false;
			isInvalid(formEntries.birthdateInput, errorMessages.birthdate);
		} else {
			const birthDate = formEntries.birthdateInput.value;
			formResults.splice(3, 1, birthDate);
		}
		if (!quantityValidation()) {
			formValid = false;
			isInvalid(formEntries.quantityInput, errorMessages.quantity);
		} else {
			const quantity = formEntries.quantityInput.value;
			formResults.splice(4, 1, quantity);
		}
		if (!locationValidation()) {
			formValid = false;
			isInvalid(formEntries.radioButtons, errorMessages.location);
		} else {
			for (const radio of formEntries.radioButtons) {
				if (radio.checked) {
					formResults.splice(5, 1, radio.value);
				}
			}	
		}
		if (!checkboxValidation()) {
			formValid = false;
			isInvalid(formEntries.checkboxInput, errorMessages.checkbox);
		} 
		if (formValid && (formResults.length = 6)) {
			isValid();
			console.log(formResults);
			
		}	
	});
	

