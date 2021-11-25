// Current Date
const date = new Date(Date.now())

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

document.querySelector('#lastupdated').textContent = date.toLocaleDateString('en-Us', options);

// Copyrigth Year
document.querySelector('#copyrightyear').textContent = new Date().getFullYear();

// Navegation Bar
function toggleMenu() {

  document.querySelector("#menu").classList.toggle("main_menu");
}

// region Preston Weather Summary API
const weatherapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5d043ca924a4acff7edf63dee3eee10d';

fetch(weatherapiURL).then((response) => response.json()).then((jsonObject) => {

  const temperature = document.querySelector('.temperature');
  t = jsonObject.main.temp;
  temperature.textContent = t;

  const currently = document.querySelector('.currently');
  currently.textContent = jsonObject.weather[0].description;

  const windspeed = document.querySelector('.windspeed');
  w = jsonObject.wind.speed;
  windspeed.textContent = w;

  const humidity = document.querySelector('.humidity');
  humidity.textContent = jsonObject.main.humidity;

  let windchill_factor = 'N/A';

  if ((t <= 50) && (w > 3)) {
    windchill_factor = `${Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + ((0.4275 * t) * Math.pow(w, 0.16)))}&#176;F`;
  }

  document.querySelector('.windchill').innerHTML = windchill_factor;
});
