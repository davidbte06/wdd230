
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



//Forecast 5 Days

var forecastAPI = 'api.openweathermap.org/data/2.5/weather?q=preston&appid=5d043ca924a4acff7edf63dee3eee10d';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      const time = jsObject.list.filter(t => t.dt_txt.includes('18:00:00'));

      for (i = 0; i < time.length; i++) {
          const desc = time[i].weather[0].description;
          document.getElementById("day" + (i+1) + "Temp").textContent = time[i].main.temp.toFixed(1);
          document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + time[i].weather[0].icon + '@2x.png';
          document.getElementById("img" + (i+1)).setAttribute('alt', desc);
    }

});