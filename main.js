const calcGrid = document.querySelector(".calculator-grid");
let inputVal = document.querySelector(".input");
let displayVal = "";
let newVal = "";
let operator = "";

function start() {
  calcGrid.addEventListener("click", (e) => {
    getValues(e);
    getOperations(e);
  });
}
//gets the number by its dataset value
function getValues(e) {
  if (e.target.matches(".num")) {
    if (e.target.dataset.val === "." && inputVal.innerText.includes(".")) {
      return;
    } else {
      setValues(e.target.dataset.val);
    }
  }
}
//sets the initial values
function setValues(val) {
  if (displayVal === "0") {
    displayVal = "";
  }
  displayVal += val;
  inputVal.innerText = displayVal;
}
function setDisplays() {
  newVal = inputVal.innerText;
  inputVal.innerText = "";
  displayVal = "";
}
//checks conditions of calculator, calculator only works if there is a number to begin calculating in the first place
//hence everything is wrapped around if(displayVal) block
function getOperations(e) {
  if (displayVal) {
    if (e.target.dataset.val === "AC") {
      inputVal.innerText = newVal = displayVal = "";
    }
    if (e.target.dataset.val === "+") {
      setDisplays();
      operator = "+";
    }
    if (e.target.dataset.val === "-") {
      setDisplays();
      operator = "-";
    }
    if (e.target.dataset.val === "/") {
      setDisplays();
      operator = "/";
    }
    if (e.target.dataset.val === "X") {
      setDisplays();
      operator = "X";
    }
    if (e.target.dataset.val === "=") {
      calc();
    }
    if (e.target.dataset.val === "+/-") {
      if (displayVal === "0") {
        return;
      } else {
        if (Number(displayVal) === Math.abs(displayVal)) {
          inputVal.innerText = -Math.abs(Number(displayVal));
        } else {
          inputVal.innerText = Math.abs(Number(displayVal));
        }
      }
    }
  }
}
//function where depending on the operator, a certain operation occurs
function calc() {
  switch (operator) {
    case "+":
      displayVal = parseFloat(newVal) + parseFloat(inputVal.innerText);
      inputVal.innerText = displayVal;
      break;
    case "-":
      displayVal = parseFloat(newVal) + parseFloat(inputVal.innerText);
      inputVal.innerText = displayVal;
      break;
    case "/":
      displayVal = parseFloat(newVal) - parseFloat(inputVal.innerText);
      inputVal.innerText = displayVal;
      break;
    case "X":
      displayVal = parseFloat(newVal) * parseFloat(inputVal.innerText);
      inputVal.innerText = displayVal;
      break;
    default:
      return inputVal.innerText;
  }
}

//starts calculator app
start();
