/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

//const cardNumber = document.getElementById("cardNumber");
//const cvc = document.getElementById("cvc");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", e => {
  let messages = [];
  if (amount.value === "" || amount.value == null) {
    messages.push("Amount must be more than 0");
  }

  if (cardNumber.value.length !== 16) {
    messages.push("Card number must be 16 characters long");
  }

  if (cvc.value === "") {
    messages.push("CVC cannot be null");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    errorElement.style = "display: block";
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
