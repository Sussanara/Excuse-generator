/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuse").innerHTML = generateExcuse;
  console.log("Hello Rigo from the console!" + randomNumber);
};

let generateExcuse = () => {
  return "No me sonó la alarma";
};
