const button = document.getElementById("send");
const form = document.getElementById("form");
const errMessage = document.querySelector(".errmessage");
const errIcon = document.querySelector(".error_icon");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const email = form["email"].value;
  const mailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email == "" && mailFormat.test(String(email).toLowerCase())) {
    return true;
  } else {
    errMessage.classList.toggle("visible");
    errIcon.classList.toggle("visible");
  }
});
