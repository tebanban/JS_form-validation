/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

const cardNumber = document.getElementById("cardNumber");
const cvc = document.getElementById("cvc");
const amount = document.getElementById("amount");

const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function(e) {
  let errMessages = [];
  if (cardNumber.value === " " || cardNumber.value === null) {
    errMessages.push("Name is equired");
  }
  if (cvc.value === " " || cvc.value === null) {
    errMessages.push("Last name is required");
  }
  if (amount.value === " " || amount.value === null) {
    errMessages.push("Last name is required");
  }
  if (errMessages.length > 0) {
    e.preventDefault();
    console.log("event default working");
  }
});
