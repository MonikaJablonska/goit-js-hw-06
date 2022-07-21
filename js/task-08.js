const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    loginForm.elements.email.value === "" ||
    loginForm.elements.password.value === ""
  ) {
    alert("Wszystkie pola powinny być uzupełnione.");
  } else {
    const formValues = {
      email: loginForm.elements.email.value,
      password: loginForm.elements.password.value,
    };
    console.log(formValues);
    loginForm.reset();
  }
});
