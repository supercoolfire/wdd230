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