let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let today = document.querySelector("#date");
today.innerHTML = `${day}, ${hours}:${minutes}`;

function distemp(response) {
  console.log(response.data);
  celsiustemp = response.data.temperature.current;
  let Temper = document.querySelector("#temp");
  Temper.innerHTML = Math.round(celsiustemp);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;
  let windy = document.querySelector("#wind");
  windy.innerHTML = Math.round(response.data.wind.speed);
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png`
  );
  icon.setAttribute("alt", response.data.condition.description);
}
function search(city) {
  let apiKey = "8f03a147570a82746679554ba230oe4t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(distemp);
}

function look(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  search(searchInput.value);
}
search("Lisbon");

let form = document.querySelector("#search-form");
form.addEventListener("submit", look);

function fahrtmep(event) {
  event.preventDefault();
  let fartemp = (celsiustemp * 9) / 5 + 32;
  let tempel = document.querySelector("#temp");
  tempel.innerHTML = Math.round(fartemp);
  celsiuslink.classList.remove("lil");
  farenheitlink.classList.add("lil");
}
function celtmep(event) {
  event.preventDefault();
  let tempol = document.querySelector("#temp");
  tempol.innerHTML = Math.round(celsiustemp);
  celsiuslink.classList.add("lil");
  farenheitlink.classList.remove("lil");
}
let celsiustemp = null;

let far = document.querySelector("#fahrenheit-link");
far.addEventListener("click", fahrtmep);

let cel = document.querySelector("#celsius-link");
cel.addEventListener("click", celtmep);
