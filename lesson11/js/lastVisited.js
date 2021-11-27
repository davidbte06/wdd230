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