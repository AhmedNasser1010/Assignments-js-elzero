// Assign-1
let methods = {
  "1": document.querySelector("div"),
  "2": document.querySelector("[id='elzero']"),
  "3": document.querySelector("[class='element']"),
  "4": document.querySelector("[name='js']"),
  "5": document.querySelectorAll("div")[0],
  "6": document.querySelectorAll("[id='elzero']")[0],
  "7": document.querySelectorAll("[class='element']")[0],
  "8": document.querySelectorAll("[name='js']")[0],
  "9": document.getElementById("elzero"),
  "10": document.getElementsByClassName("element")[0],
  "11": document.getElementsByName("js")[0],
  "13": document.getElementsByTagName("div"),
  "14": document.body.children[0],
  "15": document.body.firstElementChild,
}
for (let i = 1; i <= Object.keys(methods).length; i++) {
  console.log(methods[[i]]);
}

// Assign-2
for (let i = 0; i < document.querySelectorAll("div.assign-2 div").length; i++) {
  document.querySelectorAll("div.assign-2 div")[i].querySelector("img").src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.querySelectorAll("div.assign-2 div")[i].querySelector("img").alt = "Elzero Logo";
}

// Assign-3
let input = document.querySelector("input");
input.oninput = function () {
  document.getElementsByClassName("result")[0].innerHTML =
  `{${input.value}} USD Dollar = {${(input.value * 19.61).toFixed(2)}} Egyptian Pound`;
}

// Assign-4
let one = document.querySelector("[class='one']");
let two = document.querySelector("[class='two']");

one.title = one.className;
two.title = two.className;

one.textContent = one.className;
two.textContent = `${two.className} ${one.attributes.length}`;

// Assign-4
let ele = document.querySelector("div.assign-4").getElementsByTagName("img");
for (let i = 0; i < ele.length; i++) {
  if (!ele[i].hasAttribute("alt")) {
    document.querySelector("div.assign-4").getElementsByTagName("img")[i].setAttribute("alt", 'New');
  } else {
    document.querySelector("div.assign-4").getElementsByTagName("img")[i].setAttribute("alt", 'old');
  }
}