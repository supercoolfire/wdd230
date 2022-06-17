const pro = {
  init: () => {

    const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

    async function getProphet(URL) {
      document.querySelector('.cards').innerHTML = "";
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        // console.log("%c getProphet data", "color: red");
        // console.log(data);
        pro.displayProphets(data);
      } else {
        throw Error(response.statusText);
      }
    }
    getProphet(URL);
  },
  displayProphets: (data) => {
    data.prophets.forEach(prophet => {
      // let searching = `${prophet.name} ${prophet.lastname} ${prophet.birthdate} ${prophet.birthdate} ${prophet.birthplace} ${prophet.death} ${prophet.length} ${prophet.numofchildren} ${prophet.order}`.toLocaleLowerCase();
      const cards = document.querySelector('.cards');

      let card = document.createElement('section');
      cards.appendChild(card);
      // card.setAttribute("hohoho", searching);

      let divy = document.createElement('div')
      card.appendChild(divy)

      let span = document.createElement('span')
      span.setAttribute("class", "what");

      let h2 = document.createElement('h2');
      divy.appendChild(h2);
      h2.textContent = `${prophet.name} ${prophet.lastname}`;

      let birthP = document.createElement('p');
      divy.appendChild(birthP);
      birthP.textContent = `Date of Birth ${prophet.birthdate}`;

      let placeP = document.createElement('p');
      divy.appendChild(placeP);
      placeP.textContent = `Place of Birth ${prophet.birthplace}`;

      if (prophet.death) {
        let deathP = document.createElement('p');
        divy.appendChild(deathP);
        deathP.textContent = `Death: ${prophet.death}`;
      }


      let lengthP = document.createElement('p');
      divy.appendChild(lengthP);
      lengthP.textContent = `Length as prophet: ${prophet.length}`;

      let childrenP = document.createElement('p');
      divy.appendChild(childrenP);
      childrenP.textContent = `Number of children: ${prophet.numofchildren}`;


      let portrait = document.createElement('img');
      divy.appendChild(portrait);
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');


      document.querySelector('div.cards').appendChild(card);

    });
  },
  findIt: () => {
    let input, filter, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toLocaleLowerCase();
    // cards = document.getElementById("cards");
    // section = cards.getElementsByTagName("section");
    section = document.getElementById("cards").getElementsByTagName("section");
    // console.log("%c findIt section", "color: red");
    // console.log(section);
    for (i = 0; i < section.length; i++) {
      // a = div[i].getElementsByTagName("a")[0];
      a = section[i].getElementsByTagName("div")[0];
      // console.log("%c findIt a", "color: red");
      // console.log(a);
      txtValue = a.textContent || a.innerText;
      // console.log("%c findIt txtValue", "color: red");
      // console.log(txtValue);
      if (txtValue.toLocaleLowerCase().indexOf(filter) > -1) {
        section[i].style.display = "";
      } else {
        section[i].style.display = "none";
      }
    }
  },
  sortSection: () => {
    // let section = document.getElementById("cards").getElementsByTagName("section");
    // console.log("%c sortSection section", "color: red");
    // console.log(section);
    // let sortBy = document.getElementById("sortBy").value;
    // console.log("%c sortSection sortBy", "color: red");
    // console.log(sortBy);
    let sortie = document.querySelector("#sortBy").value;
  
    switch (sortie) {
      case "NameAscending":
        pro.ascendingFunction();
        break;
      case "NameDescending":
        pro.descendingFunction();
        break;
      default:
        pro.init();
        break;
    }
  },
  ascendingFunction: () => {
    let cards, i, switching, b, shouldSwitch;
    cards = document.getElementById("cards");
    switching = true;
    while (switching) {
      switching = false;
      b = cards.getElementsByTagName("section");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  },
  descendingFunction: () => {
    let cards, i, switching, b, shouldSwitch;
    cards = document.getElementById("cards");
    switching = true;
    while (switching) {
      switching = false;
      b = cards.getElementsByTagName("section");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }

}
pro.init();

window.onload = () => {
  document.getElementById("search").addEventListener("keyup", pro.findIt);
  // document.querySelector("#searchBtn").addEventListener("click", pro.findIt);
  document.getElementById("sortBy").addEventListener("change", pro.sortSection);
}

function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
            let paths = document.querySelectorAll("path");
            let mode=repeat?'infinite':'forwards'
            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];
                const length = path.getTotalLength();
                path.style["stroke-dashoffset"] = `${length}px`;
                path.style["stroke-dasharray"] = `${length}px`;
                path.style["stroke-width"] = `${strokeWidth}px`;
                path.style["stroke"] = `${strokeColor}`;
                path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
                path.style["animation-delay"] = `${i * delay}s`;
            }
        }
 setTextAnimation(0.1,5,1,'step-end','#ff004c',true);