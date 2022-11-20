// Assign-1
// let Msg = prompt("Print Number From - To").split("-");

// if (Msg[0] < Msg[1]) {
//   small = Msg[0];
// } else {
//   small = Msg[1]
// }
// if (Msg[0] > Msg[1]) {
//   big = Msg[0];
// } else {
//   big = Msg[1]
// }

// for (; small <= big; small++) {
//   console.log(small);
// }

// Assign-2
function Popup() {
  let mainDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  h3.innerHTML = "Welcome"
  p.innerHTML = "Welcome to ahmed website"
  btn.innerHTML = "X"
  mainDiv.appendChild(h3);
  mainDiv.appendChild(p);
  mainDiv.appendChild(btn);
  btn.onclick = function() {
    mainDiv.remove()
  }
  return document.body.appendChild(mainDiv);
}
Popup()

// Assign-3,4,5
let counter = document.querySelector(".counter");
let count = setInterval(function() {
  counter.innerHTML--;
  if (counter.innerHTML == 0) {
    clearInterval(count);
    location.href = "https://elzero.org/"
  }
  if (counter.innerHTML == 5) {
    open("https://elzero.org/", "_blank", "width=400,height= 400")
  }
}, 1000);