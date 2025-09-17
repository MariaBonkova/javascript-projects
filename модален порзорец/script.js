"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let index = 0; index < btnOpenModal.length; index++) {
  btnOpenModal[index].addEventListener("click", function () {
    console.log(btnOpenModal[index].textContent);

    modal.classList.remove("hidden"); //премахва клас
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal); //замъгляване на екрана

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
