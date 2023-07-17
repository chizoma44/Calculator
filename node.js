//Calculator

//Add an event listener to link all buttons with their identityies and functions.

//Then perform the functions.display: grid;

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

let operands = ["add", "subtract", "multiply", "divide", "error"];

operands[0]();
operands[1]();
operands[2]();
operands[3]();
operands[4]();
