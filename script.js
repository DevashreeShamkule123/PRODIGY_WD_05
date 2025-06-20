function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d602301aba24bf88d4c93c5c004845b5"; // ✅ Use quotes
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const result = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>🌡️ Temp: ${data.main.temp}°C</p>
                    <p>☁️ Weather: ${data.weather[0].description}</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                    <p>🌬️ Wind: ${data.wind.speed} m/s</p>
                `;
                document.getElementById("result").innerHTML = result;
            } else {
                document.getElementById("result").innerHTML = "City not found!";
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching data.";
        });
}
