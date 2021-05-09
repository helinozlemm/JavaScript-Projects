const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  //e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName == "") {
    addError("firstname", "First name is required");
  }
  if (lastName == "") {
    addError("lastname", "Last name is required");
  }
  if (email == "") {
    addError("email", "Email is required");
  } else if (!validateEmail(email)) {
    addError("email", "Email is not valid");
  }
  if (password == "") {
    addError("password", "Password is required");
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addError(value, message) {
  const formControl = form[value].parentNode;
  formControl.classList.add("error");

  const paragraph = document.querySelector("small");
  paragraph.innerHTML += message;
}

function removeError(value) {
  const formControl = form[value].parentNode;
  formControl.classList.remove("error");
}
