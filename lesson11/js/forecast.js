
//Get the days of the week
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
        document.getElementById("day" + (i+1)).innerHTML = daysShort[CheckDay(i)];
    }



//Get the temperatures, icons and description for the next 5 days

var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&exclude=minutely,hourly,alerts&units=imperial&appid=acc0c305e326e6d9f1226a549bc67124';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      const time = jsObject.list.filter(t => t.dt_txt.includes('18:00:00'));

      for (i = 0; i < time.length; i++) {
          const desc = time[i].weather[0].description;
          document.getElementById("day" + (i+1) + "Temp").textContent = time[i].main.temp.toFixed(1); // temperature
          document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + time[i].weather[0].icon + '@2x.png'; // icons
          document.getElementById("img" + (i+1)).setAttribute('alt', desc); // description
    }

});