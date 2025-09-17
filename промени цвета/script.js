"use strict";
/*упражнине от лекциите
const colors = ["#ccd5ae", "#e8e8e4", "#a3c4f3", "#d6ccc2", "#cdb4db"];

const currentColor = document.querySelector(".color-display");
const changeBtn = document.querySelector(".change-color-btn");

changeBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  currentColor.style.background = randomColor;
  // document.querySelector("body").style.background = randomColor;
  currentColor.textContent = ` Текущ цвят ${randomColor}`;
});*/

const input = document.querySelector(".input");
const greeting = document.querySelector(".greeting");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (!input.value) {
    greeting.textContent = `Въведи име!`;
  } else if (input.value) {
    greeting.textContent = `Честито ${input.value} хванахте Моисей за жезела! Намислете си желание!`;
  }
});
