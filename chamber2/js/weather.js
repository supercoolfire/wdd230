// https://www.youtube.com/watch?v=nGVoHEZojiQ
const app = {
    init: () => {
      document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchWeather);
      document
        .getElementById('btnCurrent')
        .addEventListener('click', app.getLocation);
    app.fetchWeather();
    },
    fetchWeather: (ev) => {
      //use the values from latitude and longitude to fetch the weather
      let lat = document.getElementById('latitude').value;
      let lon = document.getElementById('longitude').value;
      let key = '40892fcd23eff123bc5dec810bc513b6';
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
      console.log(resp);
      let row = document.querySelector('.weather.weatherRow');
      //clear out the old weather and add the new
      // row.innerHTML = '';
      row.innerHTML = resp.daily
        .map((day, idx) => {
            console.log(day)
          if (idx <= 0) { //number of days
            let dt = new Date(day.dt * 1000); //timestamp * 1000
            let sr = new Date(day.sunrise * 1000).toTimeString();
            let ss = new Date(day.sunset * 1000).toTimeString();
            return `<div class="col">
                <div class="card">
                <h4 class="card-title">${dt.toDateString()}</h4>
                <picture class="weatherPicture">
                  <img
                    src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
                    class="card-img-top"
                    alt="${day.weather[0].description}"
                  />
                  <h3 class="card-title">${day.weather[0].main}</h3>
                  </picture>
                  <div class="card-body">
                    <p class="card-text">High: <span class="weatherInfo">${day.temp.max}&deg;C</span> Low <span class="weatherInfo">${day.temp.min}&deg;C</span></p>
                    <p class="card-text">High Feels like: <span class="weatherInfo">${day.feels_like.day}&deg;C</span></p>`+
                    // <p class="card-text">Pressure <span class="weatherInfo">${day.pressure}mb</span></p>
                    `<p class="card-text">Humidity: <span class="weatherInfo">${day.humidity}%</span></p>`+
                    // <p class="card-text">UV Index <span class="weatherInfo">${day.uvi}</span></p>
                    // <p class="card-text">Precipitation <span class="weatherInfo">${day.pop * 100}%</span></p>
                    // <p class="card-text">Dewpoint <span class="weatherInfo">${day.dew_point}</span></p>
                    `<p class="card-text">Wind: <span class="weatherInfo">${day.wind_speed}m/s, ${day.wind_deg}&deg;</span></p>`+
                    // <p class="card-text">Sunrise <span class="weatherInfo">${sr}</span></p>
                    // <p class="card-text">Sunset <span class="weatherInfo">${ss}</span></p>
                  `</div>
                </div>
              </div>
            </div>`;
          }
        })
        .join(' ');
    },
  };
  
  app.init();