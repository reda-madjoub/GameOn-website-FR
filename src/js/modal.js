// DOM Elements
const closeModal = document.getElementsByClassName("close")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
const FermetureModal = () => {
  modalbg.style.display = "none";
}

// Close modal event
closeModal[0].addEventListener("click", FermetureModal)


