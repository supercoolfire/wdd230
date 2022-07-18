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
        // let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
        let url = `https://api.weather.gov/openapi.json`;
        //fetch the weather
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);
                response = resp.json();
                console.log(resp);
                return response;
            })
            .then((data) => {
                console.log(data);
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
        respo = JSON.stringify(resp.current_weather, null, 4);
        console.log(respo);
        let wea = Object.entries(resp.current_weather);
        wea.map((x)=>{
            
        })
        let row = document.querySelector('.weather.weatherRow');
        //clear out the old weather and add the new
        // row.innerHTML = '';
        row.innerHTML = `${wea[0][1]}`;
    },
};

app.init();