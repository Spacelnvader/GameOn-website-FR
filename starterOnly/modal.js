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
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll("span.close");
//Form entries
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
//Error messages
const errorMessages = {
	lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate:
		"Veuillez entrer une date de naissance valide.",
	quantity: "Veuillez entrer un nombre valide.",
	location: "Veuillez choisir une ville.",
	checkbox: "Veuillez accepter les conditions d'utilisation.",
};
//Invalid Alert
function isInvalid(element, message) {
	let invalidAlert = document.createElement("div");
	invalidAlert.classList.add("form-alert");
	let br = document.createElement("br");
	invalidAlert.innerHTML = message;
	if (element !== radioButtons) {
		element.parentElement.append(invalidAlert);
		element.parentElement.append(br);
	} else {
		element[0].parentElement.append(invalidAlert);
		element[0].parentElement.append(br);
	}
}

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

function firstValidation() {
	let inputValue = firstNameInput.value;
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}

function lastValidation() {
	let inputValue = lastNameInput.value;
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}

function emailValidation() {
	let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
	return regex.test(emailInput.value);
}

function birthdateValidation() {
	let inputValue = birthdateInput.value;
	if (isNaN(inputValue)) return true;
	else return false;
}

function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(quantityInput.value);
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
	return checkboxInput.checked;
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


document
	.getElementById("button")
	.addEventListener("click", function formValidation(event) {
		event.preventDefault();
		let isValid = true;
		removeAlerts();
		if (!firstValidation()) {
			isValid = false;
			isInvalid(firstNameInput, errorMessages.firstName);
		}
		if (!lastValidation()) {
			isValid = false;
			isInvalid(lastNameInput, errorMessages.lastName);
		}
		if (!emailValidation()) {
			isValid = false;
			isInvalid(emailInput, errorMessages.email);
		}
		if (!birthdateValidation()) {
			isValid = false;
			isInvalid(birthdateInput, errorMessages.birthdate);
		}
		if (!quantityValidation()) {
			isValid = false;
			isInvalid(quantityInput, errorMessages.quantity);
		}
		if (!locationValidation()) {
			isValid = false;
			isInvalid(radioButtons, errorMessages.location);
		}
		if (!checkboxValidation()) {
			isValid = false;
			isInvalid(checkboxInput, errorMessages.checkbox);
		}
		if (isValid) {
			form.submit();
		}
	});