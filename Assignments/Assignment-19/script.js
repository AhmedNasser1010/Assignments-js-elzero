// Assign-1
// create option list with loop
// let selectBox = document.querySelector(".fontSize");
// for (let i = 16; i <= 30; i++) {
//   let opt = document.createElement("option");
//   opt.value = `${i}px`;
//   opt.innerHTML = `Font Size: ${i}`;
//   selectBox.appendChild(opt);
// } // Do error
// ==

// set color to element
let color = document.querySelectorAll(".color li");
color.forEach((li) => {
  li.style.backgroundColor = li.dataset.color;
})
// ==

// add class active first child 
let opt = document.querySelectorAll(".fontSize option");
opt.forEach((o) => {
  if (o.value == 16) {
    o.classList.add("active");
  }
})
// ==

// set default value to page
// Fonts
document.body.style.fontFamily = document.querySelector(".fontFamily .active").dataset.font;
// color
document.body.style.color = document.querySelector(".color .active").dataset.color;
// Font size
// document.body.style.fontSize = document.querySelector(".fontSize .active").value;
// ==

// dynamic Select box font family and local storage
let fontFamilyLis = document.querySelectorAll(".fontFamily li");

if (localStorage.getItem("fontFamily")) {
  document.body.style.fontFamily = localStorage.fontFamily;
  fontFamilyLis.forEach((li) => {
    li.classList.remove("active");
  })
  document.querySelector(`[data-font="${localStorage.fontFamily}"]`).classList.add("active");
}

fontFamilyLis.forEach((li) => {
  li.addEventListener("click", _ => {
    // remove active class
    fontFamilyLis.forEach((li) => {
      li.classList.remove("active");
    })
    // add active class
    li.classList.add("active");
    // set select element and storage
    localStorage.setItem("fontFamily", document.querySelector(".fontFamily .active").dataset.font)
    document.body.style.fontFamily = document.querySelector(".fontFamily .active").dataset.font;
  })
})
// ==

// dynamic Select box colors and local storage

if (localStorage.getItem("color")) {
  document.body.style.color = localStorage.color;
  color.forEach((li) => {
    li.classList.remove("active");
  })
  document.querySelector(`[data-color="${localStorage.color}"]`).classList.add("active");
}

color.forEach((li) => {
  li.addEventListener("click", _ => {
    // remove active class
    color.forEach((li) => {
      li.classList.remove("active");
    })
    // add active class
    li.classList.add("active");
    // set select element and storage
    localStorage.setItem("color", document.querySelector(".color .active").dataset.color)
    document.body.style.color = document.querySelector(".color .active").dataset.color;
  })
})
// ==

// dynamic Select box font size and local storage
let fontSize = document.querySelectorAll(".fontSize option");
let fontSize2 = document.querySelector(".fontSize");

// if (localStorage.getItem("color")) {
//   document.body.style.color = localStorage.color;
//   color.forEach((li) => {
//     li.classList.remove("active");
//   })
//   document.querySelector(`[data-color="${localStorage.color}"]`).classList.add("active");
// }

// fontSize.forEach((opt) => {
//   opt.addEventListener("click", _ => {
//     // remove selected attr
//     fontSize.forEach((opt) => {
//       opt.removeAttribute("selected");
//     })
//     // add selected class
//     opt.setAttribute("selected", "selected")
//     // set select element and storage
//     localStorage.setItem("fontSize", document.querySelector(".fontSize [selected='selected']").value)
//     document.body.style.fontSize = document.querySelector(".fontSize [selected='selected']").value;
//   })
// })

// console.log(fontSize)

// fontSize.forEach((opt) => {
//   opt.addEventListener("click", _ => {
//     console.log(opt)
//   })
// })


// fontSize2.addEventListener('change', _ =>{
//   fontSize.forEach((o) => {
//     // remove selected attr
//     o.removeAttribute("selected");
//     // add selected attr
//   })
// });

// reset button
let btn = document.querySelector(".btn");
btn.addEventListener("click", _ => {
  localStorage.clear();
  location.reload();
})

// Assign-2
let fName = document.querySelector("[type='fname']");
let lName = document.querySelector("[type='lname']");
let email = document.querySelector("[type='email']");
let sub = document.querySelector("[type='submit']");

if (sessionStorage.getItem("fName")) {
  fName.value = sessionStorage.fName;
}
fName.onblur = function () {
  sessionStorage.setItem("fName", fName.value)
}

if (sessionStorage.getItem("lName")) {
  lName.value = sessionStorage.lName;
}
lName.onblur = function () {
  sessionStorage.setItem("lName", lName.value)
}

if (sessionStorage.getItem("email")) {
  email.value = sessionStorage.email;
}
email.onblur = function () {
  sessionStorage.setItem("email", email.value)
}

sub.onclick = _ => {
  sessionStorage.removeItem("fName");
  sessionStorage.removeItem("lName");
  sessionStorage.removeItem("email");
}