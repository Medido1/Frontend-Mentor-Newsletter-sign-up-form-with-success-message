const myForm = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const errorMsg = document.querySelector(".error_msg");
const newsLetterContainer = document.querySelector(".newsletter_container");
const sucessContainer = document.querySelector(".sucess_container");
const emailText = document.querySelector(".email");
const dismessBtn = document.querySelector(".sucess_container .btn");

function displaySucess(email){
  newsLetterContainer.classList.add("hidden");
  sucessContainer.classList.remove("hidden");
  emailText.textContent = email;
}

function showError(msg){
  emailInput.classList.add("error");
  errorMsg.classList.remove("hidden");
  errorMsg.textContent = msg;
}

function removeError(){
  emailInput.classList.remove("error");
  errorMsg.classList.add("hidden");
}

function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleError(){
  const email = emailInput.value.trim();
  if (email === ""){
    let msg = "you forgot to add your email";
    showError(msg);
  }
  else if (!isValidEmail(email)){
    let msg = "Please provide a valid email adress";
    showError(msg);
  }
  else {
    removeError();
  }
}

function resetPage(){
  myForm.reset();
  newsLetterContainer.classList.remove("hidden");
  sucessContainer.classList.add("hidden");
}

myForm.addEventListener("submit", (e) => {
  const email = emailInput.value;
  e.preventDefault();
  if (isValidEmail(email)){
    displaySucess(email);
  }
  else {
    handleError();
  }
})

emailInput.addEventListener("focus", removeError);
emailInput.addEventListener("blur", handleError);
dismessBtn.addEventListener("click", resetPage);