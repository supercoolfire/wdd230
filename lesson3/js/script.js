
// footer
let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("theYear").textContent = myYear;

document.querySelector("#lu").textContent = `Last Modification:  ${document.lastModified}`;

// custom
let myName = document.querySelector(".myName");
myName.textContent = "Jayser Pilapil";
let theTitle = document.querySelector("h1").textContent;
document.querySelector("title").textContent = `${theTitle}: ${myName}`;