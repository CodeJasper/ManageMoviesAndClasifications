"use strict";
const updateButtonId = document.currentScript.dataset.idupdatebutton;
const clasificationIdUpdate = document.currentScript.dataset.idclasification;
const formIdUpdate = document.currentScript.dataset.idform;

const updateButton = document.querySelector(`#${updateButtonId}`);
const formUpdate = document.querySelector(`#${formIdUpdate}`);

formUpdate.addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();
  updateButton.disabled = true;
  if (formUpdate.elements["name"].value === "") {
    updateButton.disabled = false;
  }

  const response = await fetch(formUpdate.action, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: formUpdate.elements["name"].value }),
  });
  const responseJson = await response.json();

  window.location.href = "/clasificaciones/lista";
}
