const counter = document.getElementById("counter");
const button = document.getElementById("increment-btn");

let count = 0;

button.addEventListener("click", function () {
  count++;
  counter.innerText = count;
});

//counter.innerText = 0;
