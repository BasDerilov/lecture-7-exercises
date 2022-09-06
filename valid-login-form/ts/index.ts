const loginBtn = document.querySelector("button");
const privacy = document.getElementById("inputPrivacy") as HTMLInputElement;

function validateForm() {
  const form: HTMLFormElement = document.querySelector(".needs-validation");
  console.log(form);
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else alert("You logged in!");

      form.classList.add("was-validated");
    },
    false
  );
}

function setButtonState(checkPrivacy: Event): void {
  if (privacy.checked) {
    loginBtn.disabled = false;
  } else loginBtn.disabled = true;
}

window.addEventListener("load", setButtonState);
privacy.addEventListener("click", setButtonState);

validateForm();
