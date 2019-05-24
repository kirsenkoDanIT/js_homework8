"use strict";

const div = document.createElement("div");
const price = document.createElement("span");
const close = document.createElement("span");
const wrongPrice = document.createElement("p");

const input = document.querySelector("input");

document.body.insertBefore(div, input);
div.appendChild(price);
div.appendChild(close);
document.body.insertBefore(wrongPrice, document.body.lastChild);

input.addEventListener("focus", () => {
  input.style.borderColor = "green";
});

input.addEventListener("blur", () => {
  if (input.value > 0) {
    price.innerText = `Текущая цена: ${input.value}`;
    input.style.color = "green";
    wrongPrice.style.display = "none";
    div.style.display = "flex";
    input.style.borderColor = "grey";
  } else {
    input.style.borderColor = "red";
    input.style.color = "inherit";
    div.style.display = "none";
    wrongPrice.innerText = "Please enter correct price";
    wrongPrice.style.display = "block";
  }
});

close.addEventListener("click", () => {
  div.style.display = "none";
  input.value = "";
  input.style.color = "inherit";
});
