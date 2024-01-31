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



function getCurrentTime() {
    var currentTimeElement = document.getElementById('current-time');
    var currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = currentTime;
}

да
setInterval(getCurrentTime, 1000);

function getWeather() {
    var apiKey = 'e10aedd98054106ad891f59a2297b533'; 
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


// const aboutText = "Hello, this is the most current and new news in the world"

// let currentIndex = 0;

// const introTextElement = document.getElementById('general-welcome');

// function addTextWithDelay() {
//     introTextElement.textContent += aboutText[currentIndex];
//     currentIndex++;

//     if (currentIndex < aboutText.length) {
//         setTimeout(addTextWithDelay, 110); 
//     }
// }

// setTimeout(addTextWithDelay, 1000); 

