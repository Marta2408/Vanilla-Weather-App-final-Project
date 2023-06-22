function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "c5b3b561f5a18c2550f5446d253a6d12";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
