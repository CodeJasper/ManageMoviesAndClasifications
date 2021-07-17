"use strict";
const cancelButtonId = document.currentScript.dataset.idcancelbutton;
const registerButtonId = document.currentScript.dataset.idregisterbutton;
const formId = document.currentScript.dataset.idform;

const cancelButton = document.querySelector(`#${cancelButtonId}`);
const registerButton = document.querySelector(`#${registerButtonId}`);
const form = document.querySelector(`#${formId}`);

cancelButton.addEventListener("click", clearInput);
form.addEventListener("submit", submitForm);

function clearInput() {
  form.elements["name"].value = "";
}

function submitForm(e) {
  e.preventDefault();
  registerButton.disabled = true;
  form.submit();
  if (form.elements["name"].value === "") {
    registerButton.disabled = false;
  }
}
