const thePage = {
  init() {
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
    // console.log(dayNumber);
    
    // calling functions
    thePage.today(fulldate);


    if (document.querySelector(".active")) {
      thePage.activeCustomize(active);
    }

    // spam
    if (document.querySelector("nav") && active === "Home") {
      // thePage.homie();
    }

    thePage.footer(myYear);

    thePage.poopUpBanner(dayNumber);

    thePage.localStore_age(myDate);


    if (document.querySelector("nav") && active === "Discover") {
      thePage.localStore_ageColor();
    }

    if (document.querySelector("nav") && active === "Join") {
      thePage.form();
    }

    if (document.querySelector("nav") && active === "Temple") {
      thePage.temple();
    }

    if (document.querySelector("nav") && active === "Contact") {
      thePage.contact();
    }

    // thePage.hover();

    // thePage.magic();
    thePage.reservationDate(myDate);
  },
  homie: () => {
    const URL = 'data/directory.json'
    const cards = document.querySelector('.contact-board');

    async function getTemples(URL) {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();

        // console.log("%c getTemples data\n", "color: blue; font-weight: bold; font-size: 1rem", data)
        showElements(data.directory);
      } else {
        throw Error(response.statusText)
      }
    }
    getTemples(URL);

    function showElements(data) {

      console.log("%c homie data", "color: red", data)

      // spot 1
      spot1 = document.querySelector('.spot:nth-of-type(1)');
      spot1.innerHTML = ""
      const goldilocks = data.filter(member => member.membership.toLocaleLowerCase() == "gold");
      const leprechaun = goldilocks[Math.floor(Math.random() * goldilocks.length)];
      console.log("%c filtered leprechaun", "color: red", leprechaun)

      let h2 = document.createElement('h2');
      h2.textContent = "Featured Gold member";
      spot1.append(h2);

      let h3 = document.createElement('h3');
      h3.textContent = leprechaun.name;
      spot1.append(h3);

      let p = document.createElement('p');
      p.textContent = leprechaun.slogan;
      spot1.append(p);

      let picture = document.createElement('picture');
      spot1.append(picture);

      let img = document.createElement('img');
      img.setAttribute("class", "directory-img");
      // img.setAttribute("src", leprechaun.imageurl);
      // img.setAttribute("src", "images/placeHolder_225x225.jpg");
      img.setAttribute("alt", `${leprechaun.name} logo`);
      img.setAttribute("loading", "lazy");
      picture.append(img);

      let pp = document.createElement('a');
      pp.textContent = leprechaun.phone;
      pp.setAttribute("href", `tel:${leprechaun.phone}`)
      spot1.append(pp);

      let pa = document.createElement('a');
      pa.textContent = leprechaun.website;
      pa.setAttribute("href", leprechaun.website)
      spot1.append(pa);

      // spot 2
      spot2 = document.querySelector('.spot:nth-of-type(2)');
      spot2.innerHTML = ""
      const silverilocks = data.filter(member => member.membership.toLocaleLowerCase() == "silver");
      const vampire = silverilocks[Math.floor(Math.random() * silverilocks.length)];
      console.log("%c filtered vampire", "color: red", vampire)

      let h22 = document.createElement('h2');
      h22.textContent = "Featured Silver member";
      spot2.append(h22);

      let h32 = document.createElement('h3');
      h32.textContent = vampire.name;
      spot2.append(h32);

      let p2 = document.createElement('p');
      p2.textContent = vampire.slogan;
      spot2.append(p2);

      let picture2 = document.createElement('picture');
      spot2.append(picture2);

      let img2 = document.createElement('img');
      img2.setAttribute("class", "directory-img");
      // img2.setAttribute("src", vampire.imageurl);
      img2.setAttribute("src", "images/placeHolder_225x225.jpg");
      img2.setAttribute("alt", `${vampire.name} logo`);
      img2.setAttribute("loading", "lazy");
      picture2.append(img2);

      let pp2 = document.createElement('a');
      pp2.textContent = vampire.phone;
      pp2.setAttribute("href", `tel:${vampire.phone}`)
      spot2.append(pp2);

      let pa2 = document.createElement('a');
      pa2.textContent = vampire.website;
      pa2.setAttribute("href", vampire.website)
      spot2.append(pa2);

    }

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
  reservationDate: (myuDate) => {
    var Chicken = document.getElementById("checkIn");
    var today = new Date();
    var day = today.getDate();
    // Set month to string to add leading 0
    var mon = new String(today.getMonth()+1); //January is 0!
    var yr = today.getFullYear();
    
      if(mon.length < 2) { mon = "0" + mon; }
    
      var date = new String( yr + '-' + mon + '-' + day );
    
    Chicken.disabled = false; 
    Chicken.setAttribute('min', date);
    Chicken.setAttribute('data-id', date);
    
    var Chick = document.getElementById("checkOut");
    Chicken.addEventListener("change", () => {})
    Chick.setAttribute('min', Chicken.getAttribute("data-id"));
  },
  activeCustomize: (active) => {
    let wayfind = document.querySelector("#wayfind");
    wayfind.innerHTML = `<h1>${wayfind.innerHTML}${active}</h1>`;

    let theTitle = document.querySelector(".companyName").textContent;
    document.querySelector("title").textContent = `${active} - ${theTitle}`;

    //fixing accessibility error
    /* document.getElementById("illustrations").onclick = () => 
    window.open("https://byui.spartandesignuniversity.com/examples/example04/WireframesModule4.pdf", "_blank").focus(); */

  },
  footer: (myYear) => {
    window.onload = () => {
      document.getElementById("theYear").textContent = myYear;
      document.querySelector("#lu").textContent = `Last Modification:  ${document.lastModified}`;
    }
  },
  poopUpBanner: (dayNumber) => {
    if (document.getElementById("dateBanner")) {
      const dateBanner = document.getElementById("dateBanner");
      if (dayNumber === 1 || dayNumber === 2) {
        dateBanner.classList.add("showme");
        // console.log("today is day 6");
      } else {
        dateBanner.classList.add("hide");
        // console.log("today is not day 6");
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
    configs.push({
      element: "body",
      color: `${bodyHex}`,
      inputId: "colorBody",
      outputId: "hexColorBody"
    });
    configs.push({
      element: "main",
      color: `${mainHex}`,
      inputId: "colorMain",
      outputId: "hexColorMain"
    });
    configs.push({
      element: ".placeholder-box",
      color: `${sectionHex}`,
      inputId: "colorSection",
      outputId: "hexColorSection"
    });
    configs.push({
      element: "HeadFoot",
      color: `${HeadFootHex}`,
      inputId: "colorHeadFoot",
      outputId: "hexColorHeadFoot"
    });
    configs.push({
      element: "galP",
      color: `${galPHex}`,
      inputId: "colorgalP",
      outputId: "hexColorgalP"
    });
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

    if (!localStorage.getItem("body")) {
      populateStorage()
    } else {
      setStyles()
    }
    if (!localStorage.getItem("main")) {
      populateStorage()
    } else {
      setStyles()
    }
    if (!localStorage.getItem("section")) {
      populateStorage()
    } else {
      setStyles()
    }
    if (!localStorage.getItem("HeadFoot")) {
      populateStorage()
    } else {
      setStyles()
    }
    if (!localStorage.getItem("galP")) {
      populateStorage()
    } else {
      setStyles()
    }


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
  form: () => {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const male = document.getElementById("email");

    fname.addEventListener("change", changing);
    lname.addEventListener("change", changing);

    function changing() {
      // console.log(fname.value);
      // console.log(lname.value);
      male.value = `${fname.value}.${lname.value}@snailmail.com`;
    }
  },
  contact: () => {
    const URL = 'data/directory.json'
    const cards = document.querySelector('.contact-board');

    async function getTemples(URL) {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();

        // console.log("%c getTemples data\n", "color: blue; font-weight: bold; font-size: 1rem", data)
        showElements(data.directory);
      } else {
        throw Error(response.statusText)
      }
    }
    getTemples(URL);

    function showElements(data) {
      data.sort(() => Math.random() - 0.5);
      document.querySelector('.contact-board').innerHTML = ""

      let h2 = document.createElement('h2');
      h2.textContent = "Board of Directors Information";
      cards.append(h2);

      // console.log("%c showElements data\n", "color: blue", data)
      data.forEach(contact => {
        let div = document.createElement('div');
        cards.append(div);


        let h3 = document.createElement('h3');
        h3.innerHTML = contact.person;
        div.append(h3);

        let pa = document.createElement('p');
        pa.innerHTML = contact.position;
        div.append(pa);

        let pp = document.createElement('a');
        pp.textContent = contact.phone;
        pp.setAttribute("href", `tel:${contact.phone}`)
        div.append(pp);

      });
    }

  },
  temple: () => {
    const URL = 'data/temples.json'
    const cards = document.querySelector('.temples-grid');
    window.dataProperty = []

    async function getTemples(URL) {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        window.data = data;

        console.log("%c getTemples data\n", "color: blue; font-weight: bold; font-size: 1rem", data)
        showElements(data.temples);
      } else {
        throw Error(response.statusText)
      }
    }
    getTemples(URL);

    function showElements(data) {
      likes = []
      document.querySelector('.temples').innerHTML = ""
      // console.log("%c showElements data\n", "color: blue", data)
      data.forEach(temple => {
        let card = document.createElement('section');
        card.setAttribute("class", "temples-card");
        cards.append(card);

        let div = document.createElement('div');
        div.setAttribute("class", "card-wrap");
        card.append(div);

        let img = document.createElement('img');
        img.setAttribute("class", "temples-img");
        img.setAttribute("src", temple.image);
        // img.setAttribute("src", "images/placeHolder_225x225.jpg");
        img.setAttribute("alt", `${temple.name} logo`);
        img.setAttribute("loading", "lazy");
        div.append(img);


        let h2 = document.createElement('h2');
        let childSpan1 = document.createElement('span');
        let childSpan2 = document.createElement('span');
        childSpan1.setAttribute("id", `heart${temple.id}`);
        childSpan1.setAttribute("class", "heart");
        // check if local storage item likes exist
        if (localStorage.getItem("likes")) {
          likes = JSON.parse(localStorage.getItem("likes"));
          // console.log("%c likes", "color: blue", localStorage.getItem('likes'))
          // console.log("%c Check hart4", "color: blue", likes.includes(`heart4`))
          if (likes.includes(`heart${temple.id}`)) {
            childSpan1.textContent = "🧡";
          } else {
            childSpan1.textContent = "🤍";
          }
        } else {
          childSpan1.textContent = "🤍";
        }
        childSpan2.textContent = temple.name;
        h2.append(childSpan1, childSpan2, );
        div.append(h2);

        let pa = document.createElement('p');
        pa.innerHTML = temple.address;
        div.append(pa);

        let pp = document.createElement('a');
        pp.textContent = temple.phone;
        pp.setAttribute("href", `tel:${temple.phone}`)
        div.append(pp);

        let dinfo = document.createElement('p');
        dinfo.textContent = "View info";
        dinfo.setAttribute("id", `button${temple.id}`)
        dinfo.setAttribute("class", "view-info")
        dinfo.setAttribute("onclick", `poop('dinfoWrap-info${temple.id}')`);
        div.append(dinfo);

        let dinfoWrap = document.createElement('div');
        dinfoWrap.setAttribute("id", `dinfoWrap-info${temple.id}`)
        dinfoWrap.setAttribute("class", "dinfoWrap-info")
        div.append(dinfoWrap);

        // services
        let hs = document.createElement('h3');
        hs.textContent = 'Services';
        dinfoWrap.append(hs);
        let uls = document.createElement('ul');
        dinfoWrap.append(uls);
        temple.services.forEach((service) => {
          let lis = document.createElement('li');
          lis.textContent = service;
          uls.append(lis);
        });
        
        // History
        let h3h = document.createElement('h3');
        h3h.textContent = 'History';
        dinfoWrap.append(h3h);
        let ulh = document.createElement('ul');
        dinfoWrap.append(ulh);
        temple.history.forEach((service) => {
          let lih = document.createElement('li');
          lih.textContent = service;
          ulh.append(lih);
        });
        
        // ordinance
        let h3o = document.createElement('h3');
        h3o.textContent = 'Ordinance';
        dinfoWrap.append(h3o);
        let ulo = document.createElement('ul');
        dinfoWrap.append(ulo);
        temple.ordinance.forEach((service) => {
          let lio = document.createElement('li');
          lio.textContent = service;
          ulo.append(lio);
        });
        
        // ordinance schedule
        let h3os = document.createElement('h3');
        h3os.textContent = 'Ordinance Schedule';
        dinfoWrap.append(h3os);
        let ulos = document.createElement('ul');
        dinfoWrap.append(ulos);
        temple.ordinance_schedule.forEach((service) => {
          let lios = document.createElement('li');
          lios.textContent = service;
          ulos.append(lios);
        });
        
        // closure schedule
        if(temple.closure_schedule.length >= 1) {
          let h3cs = document.createElement('h3');
          h3cs.textContent = 'Closure Schedule';
          dinfoWrap.append(h3cs);
          let ulcs = document.createElement('ul');
          dinfoWrap.append(ulcs);
          temple.closure_schedule.forEach((service) => {
            let lics = document.createElement('li');
            lics.textContent = service[0];
            ulcs.append(lics);
            if(service[1].length >= 1) {
              let ulcs1 = document.createElement('ul');
              lics.append(ulcs1);
              service[1].forEach((servic) => {
                let lics1 = document.createElement('li');
                lics1.textContent = servic;
                ulcs1.append(lics1);
              });
            }
  
          });

        }



        document.getElementById(`heart${temple.id}`).addEventListener("click", () => {
          likee = document.getElementById(`heart${temple.id}`);
          if (likee.textContent == "🤍") {
            
          } else {
            
          }
          // check if array exist
          if (localStorage.getItem("likes")) {
            likes = JSON.parse(localStorage.getItem("likes"));
            // alert("likes exist", likes)
            if (likes.includes(`heart${temple.id}`)) {
              // add to array
              // alert("deleting ", `heart${temple.id}`)
              likes.pop(`heart${temple.id}`);
              likee.textContent = "🤍";
              // alert(likes)
              // send array back to local storage
              localStorage.setItem('likes', JSON.stringify(likes));
            } else {
              // add to array
              likes.push(`heart${temple.id}`);
              likee.textContent = "🧡";
              // send array back to local storage
              localStorage.setItem('likes', JSON.stringify(likes));
              JSON.parse(localStorage.getItem('likes')); 
            }
          } else {
            // alert("likes dont exist")
            // send array to local storage
            localStorage.setItem('likes', JSON.stringify(likes));
            // retrieve local storage to array
            likes = JSON.parse(localStorage.getItem('likes'));
            // add to array
            likes.push(`heart${temple.id}`);
            likee.textContent = "🧡";
            // send array back to local storage
            localStorage.setItem('likes', JSON.stringify(likes));
            JSON.parse(localStorage.getItem('likes')); 
          }
        });
      });


    }

    // THIS IS FOR SOFT HEARTED PERSON



    // this is for grid list button

    // const gridbutton = document.querySelector("#grid");
    // const listbutton = document.querySelector("#list");
    // const display = document.querySelector(".directory-grid");

    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    // my answer: arrow function procces quicker than defined function
    // gridbutton.addEventListener("click", () => {
    //   display.classList.add("directory-grid");
    //   display.classList.remove("list");
    //   gridbutton.style.display = "none";
    //   listbutton.style.display = "block";
    // });

    // listbutton.addEventListener("click", () => {
    //   display.classList.add("list");
    //   display.classList.remove("directory-grid");
    //   gridbutton.style.display = "block";
    //   listbutton.style.display = "none";
    // });

    window.onload = () => {
      // search
      document.getElementById("search").addEventListener("keyup", () => {
        let input, filter, a, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toLocaleLowerCase();
        section = document.getElementById("cards").getElementsByTagName("section");
        for (i = 0; i < section.length; i++) {
          a = section[i].getElementsByTagName("div")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toLocaleLowerCase().indexOf(filter) > -1) {
            section[i].style.display = "";
          } else {
            section[i].style.display = "none";
          }
        }
      });

    //   // sort
    //   document.getElementById("sortBy").addEventListener("change", sortCard);

    //   sortByProperty = document.getElementById("sortByProperty");
    //   sortByProperty.addEventListener("change", sortCard);
    //   name = sortByProperty.value;

    //   function sortCard() {
    //     // console.log("%c onload data: ", "color: red", window.data)

    //     let sortie = document.querySelector("#sortBy").value;
    //     console.log("%c onload sortie: ", "color: red", sortie)
    //     let sortieProperty = document.querySelector("#sortByProperty").value;
    //     console.log("%c onload sortie: ", "color: red", sortieProperty)
    //     newArray = window.data.directory
    //     // console.log("%c onload newArray: ", "color: red", newArray)
    //     switch (sortie) {
    //       case "Ascending":
    //         sorted = newArray.sort((a, b) => (a[sortieProperty] > b[sortieProperty] ? 1 : -1));
    //         console.log("%c onload sorted\n", "color: blue", sorted)
    //         if (sortie && sortieProperty) {
    //           showElements(sorted);
    //         }
    //         break;
    //       case "Descending":
    //         sorted = newArray.sort((a, b) => (a[sortieProperty] < b[sortieProperty] ? 1 : -1));
    //         console.log("%c onload sorted\n", "color: blue", sorted)
    //         if (sortie && sortieProperty) {
    //           showElements(sorted);
    //         }
    //         break;
    //       default:
    //         getTemples(URL);
    //         break;
    //     }
    //   }


    }
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
  },
  footloose: () => {
    fetch('footer.html')
      .then(response => response.text())
      .then(text => {
        document.getElementById('footloose').innerHTML = text;
        document.querySelector(".social-yt").addEventListener("click", (e) => {
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();
          e.preventDefault();
        });

      });
  }
}

thePage.init();
thePage.footloose();