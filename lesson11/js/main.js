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