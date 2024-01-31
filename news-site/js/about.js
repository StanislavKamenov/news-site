function toggleMenu() {
    var responsiveMenu = document.querySelector('.responsive-menu');
    responsiveMenu.classList.toggle('active');

    var generalMenu = document.querySelector('.general-menu');
    if (responsiveMenu.classList.contains('active')) {
        generalMenu.style.display = 'none';
    } else {
        generalMenu.style.display = 'flex';
        generalMenu.style.flexDirection = 'column';
        generalMenu.style.alignItems = 'center';
        generalMenu.style.textAlign = 'center';
    }
}



function toggleMenu() {
    var generalMenu = document.querySelector('.general-menu');
    generalMenu.classList.toggle('active');
}


// Функция за вземане на текущото време и вмъкване в HTML
function getCurrentTime() {
    var currentTimeElement = document.getElementById('current-time');
    var currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = currentTime;
}

// Обновяване на времето на всяка секунда
setInterval(getCurrentTime, 1000);

// Функция за извличане на метеорологичната информация от API
function getWeather() {
    var apiKey = 'e10aedd98054106ad891f59a2297b533'; // Поставете вашият API ключ тук
    var city = document.getElementById('city-input').value;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var weatherInfoElement = document.getElementById('weather-info');
            var weatherDescription = data.weather[0].description;
            var temperature = data.main.temp;
            var weatherInfo = 'Weather in ' + city + ': ' + weatherDescription + ', Temperature: ' + temperature + '°C';
            weatherInfoElement.textContent = weatherInfo;
        })
        .catch(function (error) {
            console.log('Error fetching weather data: ', error);
        });
}


