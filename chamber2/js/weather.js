// https://www.youtube.com/watch?v=nGVoHEZojiQ
const app = {
  init: () => {
    document.getElementById('latitude').addEventListener('change', app.fetchWeather);
    document.getElementById('longitude').addEventListener('change',app.fetchWeather);
    document
      .getElementById('card-btnGet')
      .addEventListener('click', app.fetchWeather);
    document
      .getElementById('card-btnCurrent')
      .addEventListener('click', () => {
        app.getLocation();
        app.fetchWeather();
      });
      
      app.fetchWeather();
    
  },
  fetchWeather: (ev) => {
    //use the values from latitude and longitude to fetch the weather
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    // let key = '40892fcd23eff123bc5dec810bc513b6';  //first
    let key = 'e016d968218e8d05c1da6eb7b6e32df2';
    let lang = 'en';
    let units = 'metric';
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
    //fetch the weather
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        app.showWeather(data);
      })
      .catch(console.err);
  },
  getLocation: (ev) => {
    let opts = {
      enableHighAccuracy: true,
      timeout: 1000 * 10, //10 seconds
      maximumAge: 1000 * 60 * 5, //5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
  },
  ftw: (position) => {
    //got position
    document.getElementById('latitude').value =
      position.coords.latitude.toFixed(2);
    document.getElementById('longitude').value =
      position.coords.longitude.toFixed(2);
  },
  wtf: (err) => {
    //geolocation failed
    console.error(err);
  },
  showWeather: (resp) => {
    // console.log(resp);
    let row = document.querySelector('.weather.weatherRow');
    //clear out the old weather and add the new
    // row.innerHTML = '';
    resp.daily.map((day, idx) => {
        console.log(day)
        if (idx <= 0) { //number of days
          let dt = new Date(day.dt * 1000); //timestamp * 1000
          document.getElementById("card-date").textContent = dt.toDateString();
          document.getElementById("card-timeZone").textContent = resp.timezone;
          document.getElementById("card-image").innerHTML = `<img
          src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
          class="card-img-top"
          alt="${day.weather[0].description}"
        />`;
        document.getElementById("card-hotness").textContent = day.temp.max;
        document.getElementById("card-fahrenheit").textContent = (day.temp.max * 9/5 + 32).toFixed(2);
          document.getElementById("card-prhase").textContent = day.weather[0].main;
          document.getElementById("card-reprhase").textContent = day.weather[0].description;
          document.getElementById("card-hiTemp").innerHTML = `${day.temp.max}&deg;C`;
          document.getElementById("card-lowTemp").innerHTML = `${day.temp.min}&deg;C`;
          document.getElementById("card-feelTemp").innerHTML = `${day.feels_like.day}&deg;C`;
          document.getElementById("card-humidity").textContent = `${day.humidity}%`;
          document.getElementById("speedy-gonzales").textContent = day.wind_speed;
          document.getElementById("card-speedDegree").textContent = day.wind_deg;
        }
      })

      ape.init();
  },
};

app.init();