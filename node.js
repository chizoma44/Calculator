//Calculator

//Step 1: Select all buttons and the screen for opperations.
(function () {
  let screen = document.querySelector("#screen");
  let clearAll = document.querySelector(".btn-c");
  let clearNext = document.querySelector(".btn-del");
  let equalTo = document.querySelector(".btn-equal");
  let percentage = document.querySelector(".btn-percent");
  let buttons = document.querySelectorAll(".btn");

  //Step 2: For everytime a button is clicked, what happens?
  // i. Create a function for the clicked button.
  //ii. Create an event listener for that clicked button.
  //iii. Link the  clicked button to a click event and a function.
  //iv. Crate a variable of value that will pick the value of the clicked buttom.
  //v. Then push this value to the screen with a

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  equalTo.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  clearAll.addEventListener("click", function (e) {
    screen.value = "";
  });
  clearNext.addEventListener("click", function (e) {
    screen.value = screen.value.slice(0, -1);
  });
})();

let percentage = document.querySelector(".btn-percent");
percentage.addEventListener("click", percent);

function percent(num1, num2) {
  return product;
  let product = (num1 / 100) * num2;
}

percent(num1, num2);
