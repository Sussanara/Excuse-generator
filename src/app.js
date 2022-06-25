/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuse").innerHTML = generateExcuse;
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = [];
  let subject = [];
  let action = [];
  let where = [];

  return "No me dieron permiso";
};
