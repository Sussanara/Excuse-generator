/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuse").innerHTML = randomNumber;
  console.log("Hello Rigo from the console!");
};
