//Calculator

//Take Input from user.

function showValue(event) {
  event.preventDefault();

  event.target.innerHTML = "cup";
}

function delNext() {}
function delAll() {}
function float() {}
function result() {}
function percentage() {}

//Link all buttons to their identities and functions, here. Then add event listeners.

let one = document.querySelector("#one");
one.addEventListener("click", showValue);

let two = document.querySelector("#two");
two.addEventListener("click", showValue);

let three = document.querySelector("#three");
three.addEventListener("click", showValue);

let four = document.querySelector("#four");
four.addEventListener("click", showValue);

let five = document.querySelector("#five");
five.addEventListener("click", showValue);

let six = document.querySelector("#six");
six.addEventListener("click", showValue);

let seven = document.querySelector("#seven");
seven.addEventListener("click", showValue);

let eight = document.querySelector("#eight");
eight.addEventListener("click", showValue);

let nine = document.querySelector("#nine");
nine.addEventListener("click", showValue);

let zero = document.querySelector("#zero");
zero.addEventListener("click", showValue);

let addition = document.querySelector("#addition");
addition.addEventListener("click", add);

let subtraction = document.querySelector("#subtraction");
subtraction.addEventListener("click", subtract);

let multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click", multiply);

let division = document.querySelector("#division");
division.addEventListener("click", divide);

let del = document.querySelector("#clean-next");
del.addEventListener("click", delNext);

let ac = document.querySelector("#clean-all");
ac.addEventListener("click", delAll);

let point = document.querySelector("#point");
point.addEventListener("click", float);

let equalTo = document.querySelector("#equal-to");
equalTo.addEventListener("click", result);

let percent = document.querySelector("#percent");
percent.addEventListener("click", percentage);

//Then perform the functions.

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  } else {
    return num1 / num2;
  }
}

let num1 = document.querySelector("#first-input");
let num2 = document.querySelector("#second-input");
