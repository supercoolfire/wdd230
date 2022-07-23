// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
let key = 'e016d968218e8d05c1da6eb7b6e32df2';
let lang = 'en';
// let units = 'metric';
let units = 'Imperial';
let cityId = '2172797';
// const apiURL = `api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${key}`;
let cityName = 'fairbanks';
const url = `//api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=${units}`;
// const url = `//api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${key}`;

apiFetch(url);

async function apiFetch(url){
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log("%c Fetch response data:\n", "color: blue; font-size: 1rem", data);
        displayResults(data);

    } else {
        throw Error(await response.text());
    }
}

function displayResults(data) {
    currentTemp.innerHTML = data.main.temp.toFixed(1);

    const imagesrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
}