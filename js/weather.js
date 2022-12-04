const weather = document.querySelector("#weather");

function onGeoOk(position) {
    const API_KEY = "0d17015e32b7825b3a37edf196f0da4c";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => {
        //console.log(data.name, data.weather[0].main);
        weather.innerText = `${data.name}, ${Math.round(data.main.temp-273)}℃, ${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Cannot get your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);