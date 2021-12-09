const weatherapiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=16.75&lon=-93.1167&units=imperial&appid=5d043ca924a4acff7edf63dee3eee10d'

fetch(weatherapiURL).then((response) => response.json()).then((jsonObject) => {

    const temperature = document.querySelector('.temperature');
    temperature.textContent = Math.round(jsonObject.current.temp);

    const condition = document.querySelector('.condition');
    condition.textContent = jsonObject.current.weather[0].description;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsonObject.current.humidity;

    //Forecast
    Object.keys(jsonObject.daily).slice(0, 3).forEach(i => {
        let forecastdate = new Date(jsonObject.daily[i].dt * 1000);

        let flexcol = document.createElement('div');
        flexcol.classList.add('flex-col');

        let col_head_span = document.createElement('span');
        col_head_span.classList.add('col-head');
        col_head_span.textContent = forecastdate.toLocaleString("default", {
            weekday: "short"
        });
        flexcol.appendChild(col_head_span);

        let weather_info_div = document.createElement('div');
        weather_info_div.classList.add('weather-info');
        flexcol.appendChild(weather_info_div);

        let img = document.createElement('img');
        img.setAttribute("src", `images/${jsonObject.daily[i].weather[0].icon}.png`);
        img.setAttribute("alt", `Icon depicting ${jsonObject.daily[i].weather[0].description} in Tuxtla Gutierrez, Chiapas`);
        img.setAttribute('loading', 'lazy');
        weather_info_div.appendChild(img);

        let data_span = document.createElement('span');
        data_span.classList.add('data');
        data_span.innerHTML = `${Math.round(jsonObject.daily[i].temp.day)}&#176;F`;
        weather_info_div.appendChild(data_span);

        document.querySelector('div.flex').appendChild(flexcol);
    });

    //Weather Alerts
    if (jsonObject.alerts) {
        Object.keys(jsonObject.alerts).forEach(i => {
            let banner = document.createElement('div');
            banner.classList.add('weather-alert');

            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.innerHTML = "&times;";
            button.classList.add('close-button');
            button.addEventListener("click", () => {
                banner.remove('weather-alert');
            })

            let title = document.createElement('h2');
            title.textContent = jsonObject.alerts[i].event;

            let description = document.createElement('p');
            description.textContent = jsonObject.alerts[i].description;

            title.addEventListener("onmouseover", () => {
                if (description.style.display === "none") {
                    description.style.display = "block";
                }
            })

            title.addEventListener("onmouseout", () => {
                if (description.style.display === "block") {
                    description.style.display = "none";
                }
            })

            banner.appendChild(title);
            banner.appendChild(button);
            banner.appendChild(description);

            const body = document.querySelector('body');
            body.prepend(banner);
        });
    } else {
        bannerClass = document.querySelector('weather-alert');
        if (bannerClass) {
            banner.remove('weather-alert');
        }
    }

});