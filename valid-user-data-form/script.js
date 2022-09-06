"use strict";

const [name, lastName, phone, adress, postalCode, country] = [
  document.getElementById("inputName"),
  document.getElementById("inputLastName"),
  document.getElementById("inputPhoneNumber"),
  document.getElementById("inputAdress"),
  document.getElementById("inputPostal"),
  document.getElementById("inputCountry"),
];

const preventNonDigitsInput = (event) => {
  if (isNaN(event.key)) {
    event.preventDefault();
  }
};

function validateForms() {
  const forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else alert("Congrats! We stole your data");

        form.classList.add("was-validated");
      },
      false
    );
  });
}

phone.addEventListener("keypress", preventNonDigitsInput);

postalCode.addEventListener("keypress", preventNonDigitsInput);

validateForms();
