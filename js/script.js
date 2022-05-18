// hamburger
function toggleMenu() {
    console.log("it worked");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// footer
let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("theYear").textContent = myYear;

document.querySelector("#lu").textContent = `Last Updated:  ${document.lastModified}`;

