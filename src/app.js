/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse;
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["mi"];
  let subject = ["mamá", "abuela", "hermana"];
  let action = ["dio vuelta", "me quitó"];
  let possetion = ["postre", "galleta"];
  let where = ["en el almuerzo", "en la cena"];

  let pronounIndex = Math.floor(Math.random() * pronounlength);
  let subjectIndex = Math.floor(Math.random() * subjectlength);
  let actionIndex = Math.floor(Math.random() * actionlength);
  let possetionIndex = Math.floor(Math.random() * possetionlength);
  let whereIndex = Math.floor(Math.random() * wherelength);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
