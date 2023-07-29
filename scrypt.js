// Define variables or constants here (if needed)

// Function to fetch weather data from the API
async function getWeatherData() {
    const apiKey = 'YOUR_API_KEY'; // Replace this with your actual API key
    const city = 'New York'; // Replace this with the city you want to get weather data for
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Process the received weather data and update the DOM
        updateWeatherInfo(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update the DOM with weather information
function updateWeatherInfo(data) {
    const weatherInfoDiv = document.getElementById('weather-info');

    // Extract relevant information from the API response and create HTML content
    const city = data.name;
    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius
    const weatherDescription = data.weather[0].description;

    const weatherHTML = `
        <h2>Current Weather in ${city}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Weather Description: ${weatherDescription}</p>
    `;

    // Update the weather-info div with the new content
    weatherInfoDiv.innerHTML = weatherHTML;
}

// Call the getWeatherData function when the page loads
window.onload = getWeatherData;
