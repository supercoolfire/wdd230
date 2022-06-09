const thePage = {
  init: () => {
    // hamburger
    if (document.getElementById("hamburgerBtn")) {
      document.getElementById("hamburgerBtn").onclick = thePage.toggleMenu;
    }
    if (document.getElementById("hamburgerBtn2")) {
      document.getElementById("hamburgerBtn2").onclick = thePage.toggleMenu;
    }
    // initialize variables
    let active = document.querySelector(".active").textContent;
    let myDate = new Date();
    let myYear = myDate.getFullYear();
    const fulldate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full"
    }).format(myDate);
    const dayNumber = myDate.getDay();
    console.log(dayNumber);

    // calling functions
    thePage.today(fulldate);

    
    if (document.querySelector(".active")){
      thePage.activeCustomize(active);
    }

    // spam
    if (document.querySelector("nav") && active === "Home") {
      thePage.spam();
    }
    thePage.footer(myYear);
    thePage.poopUpBanner(dayNumber);

    thePage.localStore_age(myDate);

    thePage.localStore_ageColor();

    thePage.hover();

    thePage.magic();
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
  activeCustomize: (active) => {
    let wayfind = document.querySelector("#wayfind");
    wayfind.innerHTML = `<h1>${active}</h1>`;

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
  },
  localStore_age: () => {
    if (document.querySelector(".visits") && document.querySelector(".today")) {

      // initialize display elements
      const todayDisplay = document.querySelector(".today");
      const visitsDisplay = document.querySelector(".visits");

      // get the stored value in localStorage
      let numVisits = Number(window.localStorage.getItem("visits-ls"));
      // console.log("%cFrom local storage numVisits: ", "color: red;");
      // console.log(numVisits);

      let visitDate = Number(window.localStorage.getItem("visitDate"));
      // console.log("%cFrom local storage visitDate: ", "color: red;");
      // console.log(visitDate);

      visitvisitesMessage = document.querySelector(".visits").parentNode;
      visitMessage = document.querySelector(".today").parentNode;
      visitvisitesMessage.style.fontSize = "1.1rem";
      visitMessage.style.fontSize = "1.1rem";

      // determine if this is the first visit or display the number of visits.
      if (numVisits !== 0) {
        //1000 milliseconds in 1 second, 60 seconds in 1 minute, 60 minutes in an hour, 24 hours in 1 day.
        const msInDay = 1000 * 60 * 60 * 24;
        // console.log(`%cmilliseconds in a day is ${msInDay}`, "color: red;");
        visitsDisplay.textContent = numVisits;
        let difference = Math.round((Date.now() - visitDate) / msInDay);
        todayDisplay.textContent = difference;
      } else {
        // visitsDisplay.textContent = `This is your first visit!`;
        visitvisitesMessage.textContent = ""
        visitMessage.setAttribute("class", "visitMessage");

        visitMessage.textContent = "Welcome first time visitor!";
        visitMessage.setAttribute("class", "visitMessage");
      }
      // increment the number of visits.
      numVisits++;
      // store the new number of visits value
      localStorage.setItem("visits-ls", numVisits);
      localStorage.setItem("visitDate", Date.now())
    }
  },
  localStore_ageColor: () => {
    function hexToRGB(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      } else {
        return `rgb(${r}, ${g}, ${b})`;
      }
    }

    function hexify(color) {
      let values = color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',');
      let a = parseFloat(values[3] || 1),
          r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
          g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
          b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
      return "#" +
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2);
    }
    
    let myHex = hexify('rgba(255,255,255,0.6)'); // "#f5faf3"
    
    console.log(myHex);

    // get colors
    const body = document.querySelector("body");
    bodyHex = hexify(window.getComputedStyle(body).backgroundColor);
    const main = document.querySelector("main");
    mainHex = hexify(getComputedStyle(main).backgroundColor);
    const section = document.querySelector(".placeholdit-box");
    sectionHex = hexify(getComputedStyle(section).backgroundColor);
    const HeadFoot = document.querySelector("header");
    HeadFootHex = hexify(getComputedStyle(HeadFoot).backgroundColor);
    const galP = document.querySelector(".galP");
    galPHex = hexify(getComputedStyle(galP).backgroundColor);

    // get inputs
    colorBody = document.getElementById("colorBody");
    colorMain = document.getElementById("colorMain");
    colorSection = document.getElementById("colorSection");
    colorHeadFoot = document.getElementById("colorHeadFoot");
    colorgalP = document.getElementById("colorgalP");

    //set initial value to inputs 
    colorBody.value = `${bodyHex}`;
    colorMain.value = `${mainHex}`;
    colorSection.value = `${sectionHex}`;
    colorHeadFoot.value = `${HeadFootHex}`;
    colorgalP.value = `${galPHex}`;

    console.log("%c colorBody", "color: red")
    console.log(colorBody)
    
    // prepare output
    const hexColorBody = document.querySelector("#hexColorBody");
    const hexColorMain = document.querySelector("#hexColorMain");
    const hexColorSection = document.querySelector("#hexColorSection");
    const hexColorHeadFoot = document.querySelector("#hexColorHeadFoot");
    const hexColorgalP = document.querySelector("#hexColorgalP");
    
    let configs = [];
    configs.push({ element: "body", color: `${bodyHex}`, inputId: "colorBody", outputId: "hexColorBody"});
    configs.push({ element: "main", color: `${mainHex}`, inputId: "colorMain", outputId: "hexColorMain"});
    configs.push({ element: ".placeholder-box", color: `${sectionHex}`, inputId: "colorSection", outputId: "hexColorSection"});
    configs.push({ element: "HeadFoot", color: `${HeadFootHex}`, inputId: "colorHeadFoot", outputId: "hexColorHeadFoot"});
    configs.push({ element: "galP", color: `${galPHex}`, inputId: "colorgalP", outputId: "hexColorgalP"});
    // alert(window.getComputedStyle(main).backgroundColor);

    // console.log("%cConfigs: ", "color: red")
    // console.log(configs)
    /* configs.forEach((elemento) => {
      // console.log("%cElement: ", "color: red")
      // console.log(elemento)
      // console.log("%cColor: ", "color: red")
      // console.log(document.querySelector("footer").style.backgroundColor)
      if (!localStorage.getItem(elemento.inputId)) {
        populateStorage(elemento.element, elemento.inputId, elemento.color, elemento.outputId);
      } else {
        setStycles(elemento.element, elemento.inputId, elemento.color, elemento.outputId);
      }
    }); */
/* 
    function populateStorage(element, input, color, outputId) {
      localStorage.setItem(input, color);
      setStyles(element, input, color, outputId);
    } */
    
if (!localStorage.getItem("body")) {	populateStorage()} else {setStyles()}
if (!localStorage.getItem("main")) {	populateStorage()} else {setStyles()}
if (!localStorage.getItem("section")) {	populateStorage()} else {setStyles()}
if (!localStorage.getItem("HeadFoot")) {	populateStorage()} else {setStyles()}
if (!localStorage.getItem("galP")) {	populateStorage()} else {setStyles()}


function populateStorage() {
	localStorage.setItem("body", colorBody.value);
	localStorage.setItem("main", colorMain.value);
	localStorage.setItem("section", colorSection.value);
	localStorage.setItem("HeadFoot", colorHeadFoot.value);
	localStorage.setItem("galP", colorgalP.value);
	setStyles();
}
    function setStyles() {
      let colorBody = localStorage.getItem("body");
      let colorMain = localStorage.getItem("main");
      let colorSection = localStorage.getItem("section");
      let colorHeadFoot = localStorage.getItem("HeadFoot");
      let colorgalP = localStorage.getItem("galP");

      document.getElementById("colorBody").value = colorBody;
      document.getElementById("colorMain").value = colorMain;
      document.getElementById("colorSection").value = colorSection;
      document.getElementById("colorHeadFoot").value = colorHeadFoot;
      document.getElementById("colorgalP").value = colorgalP;

      hexColorBody.textContent = `Hex: ${colorBody} ${hexToRGB(colorBody)}`;
      hexColorMain.textContent = `Hex: ${colorMain} ${hexToRGB(colorMain)}`;
      hexColorSection.textContent = `Hex: ${colorSection} ${hexToRGB(colorSection)}`;
      hexColorHeadFoot.textContent = `Hex: ${colorHeadFoot} ${hexToRGB(colorHeadFoot)}`;
      hexColorgalP.textContent = `Hex: ${colorgalP} ${hexToRGB(colorgalP)}`;

      document.documentElement.style.setProperty('--body-background-color', colorBody);
      document.documentElement.style.setProperty('--main-background-color', colorMain);
      document.documentElement.style.setProperty('--section-background-color', colorSection);
      document.documentElement.style.setProperty('--head-foot-color', colorHeadFoot);
      document.documentElement.style.setProperty('--galP-background-color', colorgalP);
    }

    
    
    colorBody.addEventListener("input", populateStorage);   
    colorMain.addEventListener("input", populateStorage);    
    colorSection.addEventListener("input", populateStorage);    
    colorHeadFoot.addEventListener("input", populateStorage);    
    colorgalP.addEventListener("input", populateStorage);    
     

    // console.log("%c input values : ", "color: red")
    // console.log(colorBody.value, colorMain.value, colorSection.value, colorHeadFoot.value) 
  },
  hover: () => {
    const imgTag = document.querySelector("img").src;

    let mainey = document.createElement("main")
    let divy = document.createElement("div");
    mainey.append(divy);
    // divy.style.visibility = "hidden";
    divy.className = "divy";
    divy.innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">You've got Rick-Rolled</h5>
        <button type="button" class="close" data-dismiss="modal">×</button>                
      </div>
      <div class="modal-body">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe id="roll" class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowfullscreen=""></iframe>
        </div>
        <p>
          Special thanks to my instructor Christopher Rigby
        </p>
      </div>
    </div>
  </div>`;

    
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      divy.style.visibility = 'visible';
      console.log("%cimgTag", "color: red")
      console.log(imgTag)

  }
  
  },
  magic: () => {
    
    // window.onscroll = function(ev) {
    //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //       // you're at the bottom of the page
    //     frmFeedbackElement.style.visibility = 'visible';
    //   }
  }
  
}
thePage.init();