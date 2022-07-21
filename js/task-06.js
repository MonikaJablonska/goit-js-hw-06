const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  if (Number(validationInput.dataset.length) === validationInput.value.length) {
    validationInput.className = "valid";
  } else {
    validationInput.className = "invalid";
  }
});
