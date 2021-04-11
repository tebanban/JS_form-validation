/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

const cardNumber = document.getElementById("cardNumber");
const cvc = document.getElementById("cvc");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", e => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (cardNumber.value.length !== 16) {
    messages.push("Password must be longer than 6 characters");
  }

  if (cvc.value === "") {
    messages.push("cvc cannot be null");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

// const cardNumber = document.getElementById("cardNumber");
// const cvc = document.getElementById("cvc");
// const form = document.getElementById("form");
// const errElement = document.getElementById("errElement");

// form.addEventListener("submit", e => {
//   let errMessages = [];
//   if (cardNumber.value === " " || cardNumber.value === null) {
//     errMessages.push("Card number is equired");
//   }
//   if (cvc.value === " " || cvc.value === null) {
//     errMessages.push("Cvc is required");
//   }
//   if (amount.value === " " || amount.value === null) {
//     errMessages.push("Amount is required");
//   }
//   if (errMessages.length > 0) {
//     e.preventDefault();
//     console.log("event default working");
//     errElement.innerText = "hello";
//   }
// });
