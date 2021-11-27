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



//Days of the week
const d = new Date()
const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("col" + (i+1)).innerHTML = daysShort[CheckDay(i)];
    }



//Forecast 5 days

var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&exclude=minutely,hourly,alerts&units=imperial&appid=5d043ca924a4acff7edf63dee3eee10d';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      const time = jsObject.list.filter(t => t.dt_txt.includes('18:00:00'));
      console.log(time);

      for (i = 0; i < time.length; i++) {
          const desc = time[i].weather[0].description;
          document.getElementById("day" + (i+1)).textContent = time[i].main.temp.toFixed(1);
          document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + time[i].weather[0].icon + '@2x.png';
          document.getElementById("img" + (i+1)).setAttribute('alt', desc);
    }

});