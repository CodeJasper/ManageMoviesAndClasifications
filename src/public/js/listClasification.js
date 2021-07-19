"use strict";

function executeScript() {
  const idClasification = document.currentScript.dataset.idclasification;
  const nameClasification = document.currentScript.dataset.nameclasification;

  const updateButton = document.querySelector(
    `#update-clasification-button-${idClasification}`
  );
  const deleteButton = document.querySelector(
    `#delete-clasification-button-${idClasification}`
  );

  updateButton.addEventListener("click", () =>
    updateClasification(idClasification, nameClasification)
  );

  deleteButton.addEventListener("click", () =>
    deleteClasification(idClasification)
  );
}

function updateClasification(idClasification, nameClasification) {
  const formUpdate = document.querySelector("#form-update-clasification");
  formUpdate.elements["name"].value = nameClasification;
  formUpdate.action = "/clasificaciones/actualizar" + `/${idClasification}`;
}

async function deleteClasification(idClasification) {
  const deleteButton = document.querySelector(
    `#delete-clasification-button-${idClasification}`
  );

  deleteButton.disabled = true;

  const response = await fetch(`/clasificaciones/borrar/${idClasification}`, {
    method: "DELETE",
  });
  const responseJson = await response.json();

  window.location.href = "/clasificaciones/lista";
}

executeScript();
