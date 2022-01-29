function getCurrentWeather(response) {
  let tempElement = document.querySelector("#temp-display");
  let humidElement = document.querySelector("#humidity-display");
  let windElement = document.querySelector("#wind-display");

  tempElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  humidElement.innerHTML = `humidity: ${response.data.main.humidity}%`;
  windElement.innerHTML = `windspeed: ${response.data.wind.speed}km/h`;
}
// Creating interactive functionality searchbar
function citySearched(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-name");
  let cityInput = document.querySelector("#query");

  cityElement.innerHTML = cityInput.value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${unit}&appid=${APIkey}`;
  console.log(apiURL);
  axios.get(apiURL).then(getCurrentWeather);
}

// Library containing weather information
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  sanfrancisco: {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// Get current date and update date and time shown on page
let now = new Date();
let months = [
  "January",
  "Febuari",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
];
document.getElementById(
  "time-display"
).innerHTML = `${now.getHours()}:${now.getMinutes()}`;

document.getElementById("date-display").innerHTML = `${now.getDate()} ${
  months[now.getMonth()]
}`;

// Define API variables
let APIkey = "421760f2fa0cfa886ced8b96269374ed";
let unit = "metric";

let searchBar = document.querySelector("#city-search");
searchBar.addEventListener("submit", citySearched);
