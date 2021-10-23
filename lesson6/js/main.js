document.querySelector("#copyrightyear").textContent = new Date().getFullYear();;

let event = new Date();

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

let date = event.toLocaleDateString('en-US', options);

document.querySelector("#lastupdated").textContent = date;


function toggleMenu() {

    document.querySelector("#menu").classList.toggle("main_menu");
}

let day = new Date();
if (day.getDay() == 5) {
    document.querySelector('#banner').style.display = 'flex';
} else {
    document.querySelector('#banner').style.display = 'none';
}