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

//Preston Weather Summary API
const API = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5d043ca924a4acff7edf63dee3eee10d';

fetch(API).then((response) => response.json()).then((jsonObject) => {

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

// Preston Events
const urlPreston = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(urlPreston)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonPreston) {

    const towns = jsonPreston['towns'];
    const townPreston = towns.filter((towns) => towns.name === 'Preston');

    townPreston.forEach((xPreston) => {
      document.getElementById('preston-events').innerHTML = `${xPreston.events.join('<br>')}`;

    });

  });

// GALLERY
// Lazy Loading
const images = document.querySelectorAll('img[data-src]');

const imageOptions = {
  threshold: 0,
  rootMargin: '0px 0px 50px 0px'
};

function loadImages(image) {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    (image.removeAttribute('data-src'))
  };
}

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imageOptions);

  images.forEach((img) => {
    imageObserver.observe(img);
  });
} else {
  images.forEach((img) => {
    loadImages(img);
  });
}

// Local Storage
const daysSinceLastVisit = document.querySelector('#last-visited');

function setDateLastVisited() {
  localStorage.setItem('dateLastVisited', date);
}

function getDateLastVisited(daysSinceLastVisit) {
  try {
    const milisecondsToDays = 8640000;
    const lastVisit = localStorage.getItem('dateLastVisisted') || date;
    const days = Math.round((lastVisit - date) / milisecondsToDays);

    if (days > 0) {
      daysSinceLastVisit.textContent = days;
    } else {
      daysSinceLastVisit.textContent = 0;
    }
  } catch (er) {
    daysSinceLastVisit.textContent = 0;
  }
}

getDateLastVisited(daysSinceLastVisit)
setDateLastVisited()