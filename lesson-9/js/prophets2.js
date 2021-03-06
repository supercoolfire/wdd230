

const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphet(URL) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    // console.log("%c getProphet data", "color: red");
    // console.log(data);
    displayProphets(data);
  } else {
    throw Error(response.statusText);
  }
}

function displayProphets(data) {
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
}
getProphet(URL);

function sortSection() {
  console.log("%c sortSection sorting", "color: red" );
  console.log(sorting)

  let list, i, switching, b, shouldSwitch;
  list = document.getElementById("101Martians");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("section");
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
}

function findIt() {
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
}

function sortSection() {
  let section = document.getElementById("cards").getElementsByTagName("section");
  console.log("%c sortSection section", "color: red");
  console.log(section);
  let sortBy = document.getElementById("sortBy").value;
  console.log("%c sortSection sortBy", "color: red");
  console.log(sortBy);  
}


window.onload = () => {
  document.getElementById("search").addEventListener("keyup", findIt);
  document.querySelector("#sortBy").addEventListener("change", sortSection());
}