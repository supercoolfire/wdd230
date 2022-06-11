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
  
      thePage.footer(myYear);
  
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
 
    }
    
  }
  thePage.init();