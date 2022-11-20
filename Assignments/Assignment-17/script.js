// Assign-1
let openLink = document.querySelectorAll(".assign-1 a");
for (let i = 0; i < openLink.length; i++) {
  if (openLink[i].innerHTML === "Elzero" && openLink[i].classList.contains("open") === true) {
    console.log(openLink[i].href);
  }
}

// Assign-2
let p = document.querySelector(".assign-2 > p");
p.remove();

let ourElement = document.querySelector(".our-element");

let firstEle = document.createElement("div");
firstEle.innerHTML = "Start";
firstEle.className = "start";
firstEle.title = "Start Element";
firstEle.setAttribute("data-src", "Start");

let lastEle = document.createElement("div");
lastEle.innerHTML = "Last";
lastEle.className = "last";
lastEle.title = "Last Element";
lastEle.setAttribute("data-src", "Last");

ourElement.before(firstEle);
ourElement.after(lastEle);

// Assign-3
let word = document.querySelector(".assign-3 div span");

console.log(word.nextSibling.nextSibling.nextSibling.textContent.trim());

// Assign-4
let allChild = document.querySelector(".assign-4").children;

for (let i = 0; i < allChild.length; i++) {
  allChild[i].onclick = function() {
    console.log(`This is ${allChild[i].nodeName.toLowerCase()}`);
  }  
}