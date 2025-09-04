const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city === "") {
    weatherDisplay.textContent = "⚠️ Please enter a city name.";
    return;
  }
  fetchWeather(city);
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=YOUR_API_KEY&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;
    weatherDisplay.textContent = `🌍 ${cityName} — ${temp}°C, ${description}`;
  } catch (error) {
    weatherDisplay.textContent = `❌ ${error.message}`;
  }
}
