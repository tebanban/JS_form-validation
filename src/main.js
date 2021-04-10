/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

const sendButton = document.getElementById("google");
const check = document.getElementById("check");

sendButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("event default ok");
});
