// hamburger
function toggleMenu() {
  console.log("it worked");
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//current date
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(now);
// datefield.innerHTML = `<em>${fulldate}</em>`;
datefield.innerHTML = fulldate;

// spam
function toggleSpam() {
  console.log("it not worked");
  document.getElementById("spams").classList.toggle("closness");
}
document.getElementById("spamClose").onclick = toggleSpam;

function toggleBtnJoinNow() {
  console.log("Tired of woking");
  document.getElementById("spams").classList.toggle("closness");
  document.getElementById("join").scrollIntoView();
}
document.getElementById("btnJoinNow").onclick = toggleBtnJoinNow;

function toggleSignIn() {
  console.log("work again");
  document.getElementById("spams").classList.toggle("closness");
  document.getElementById("spams").scrollIntoView();
}
document.getElementById("signIn").onclick = toggleSignIn;
// spam draggable
dragElement(document.getElementById("spams"));

function dragElement(spamwindow) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById("spamTitle")) {
    document.getElementById("spamTitle").onmousedown = dragMouseDown;
  } else {
    spamwindow.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    spamwindow.style.top = (spamwindow.offsetTop - pos2) + "px";
    spamwindow.style.left = (spamwindow.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// footer
let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("theYear").textContent = myYear;

document.querySelector("#lu").textContent = `Last Modification:  ${document.lastModified}`;

// custom
let wayfind = document.querySelector(".wayfind");
wayfind = document.querySelector(".active").textContent;
let myName = document.querySelector(".myName");
myName.textContent = "Jayser Pilapil";
let theTitle = document.querySelector("h1").textContent;
let theTagline = document.querySelector("h2").textContent;
document.querySelector("title").textContent = `${theTitle} ${theTagline}`;
document.getElementById("rickRoll").onclick = () => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();

//fixing accessibility error
document.getElementById("illustrations").onclick = () => window.open("https://byui.spartandesignuniversity.com/examples/example04/WireframesModule4.pdf", "_blank").focus();