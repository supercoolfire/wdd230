const thePage = {
  init: () => {
    // hamburger
    if (document.getElementById("hamburgerBtn")) {
      document.getElementById("hamburgerBtn").onclick = thePage.toggleMenu;
      document.getElementById("hamburgerBtn2").onclick = thePage.toggleMenu;
    }
    // initialize variables
    // let active = document.querySelector(".active").textContent;
    let myDate = new Date();
    let myYear = myDate.getFullYear();
    const fulldate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full"
    }).format(myDate);
    const dayNumber = myDate.getDay();
    console.log(dayNumber);

    // calling functions
    thePage.today(fulldate);
    // spam
    if (document.querySelector("nav") && active === "Home") {
      thePage.spam();
      thePage.customize(active);
    }
    thePage.footer(myYear);
    thePage.poopUpBanner(dayNumber);
  },
  toggleMenu: () => {
    console.log("it worked");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("hamburgerBtn2").classList.toggle("close");
    document.querySelector("nav").classList.toggle("move");
  },
  today: (fulldate) => {
    if (document.querySelector(".date")) {
      const datefield = document.querySelector(".date");
      // datefield.innerHTML = `<em>${fulldate}</em>`;
      datefield.innerHTML = fulldate;
    }
  },
  spam: () => {
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
  },
  customize: (active) => {
    let wayfind = document.querySelector("#wayfind");
    wayfind.innerHTML = `<h1>${active}</h1>`;

    let myName = document.querySelector(".myName");
    myName.textContent = "Jayser Pilapil";
    let theTitle = document.querySelector(".companyName").textContent;
    document.querySelector("title").textContent = `${active} - ${theTitle}`;


    if (active === "Home") {
      document.querySelector(".rickRoll").onclick = () =>
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();
    }
    //fixing accessibility error
    /* document.getElementById("illustrations").onclick = () => 
    window.open("https://byui.spartandesignuniversity.com/examples/example04/WireframesModule4.pdf", "_blank").focus(); */

  },
  footer: (myYear) => {
    document.getElementById("theYear").textContent = myYear;
    document.querySelector("#lu").textContent = `Last Modification:  ${document.lastModified}`;
  },
  poopUpBanner: (dayNumber) => {
    if (document.getElementById("dateBanner")) {
      const dateBanner = document.getElementById("dateBanner");
      if (dayNumber === 1 || dayNumber === 2) {
        dateBanner.classList.add("showme");
        console.log("today is day 6");
      } else {
        dateBanner.classList.add("hide");
        console.log("today is not day 6");
      }
      const dateBannerClose = document.getElementById("dateBannerClose");
      dateBannerClose.addEventListener("click", () => dateBanner.style.display = "none");
    }
  }
}
thePage.init();