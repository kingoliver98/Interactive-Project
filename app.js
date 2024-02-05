const btn = document.querySelector("button");
const popUp = document.querySelector(".pop-up");

const numbers = document.querySelectorAll("span");

const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
const selectedElement = document.querySelector(".selected");

let numberSelected = null;

btn.addEventListener("click", function () {
  if (numberSelected === null) {
    popUp.classList.add("active");

    setTimeout(() => {
      popUp.classList.remove("active");
    }, 3000);
  } else {
    selectedElement.textContent = `You selected ${numberSelected} out of 5`;
    firstDiv.classList.remove("d-flex");
    firstDiv.classList.add("d-none");
    secondDiv.classList.remove("d-none");
    secondDiv.classList.add("d-flex");
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    //removes the active class from all the elements
    numbers.forEach((n) => {
      n.classList.remove("active");
    });
    //adds active class to the one that was clicked
    number.classList.add("active");
    numberSelected = number.textContent
  });
});
