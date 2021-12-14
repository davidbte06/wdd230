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

