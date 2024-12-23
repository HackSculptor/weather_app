const apikey = "46b3b65b33b34853abd191235242212";

const currentWeather = async () => {
    document.querySelector(".search button").addEventListener("click", async () => {
        const city = document.querySelector(".search input").value;

        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("City not found or invalid API response");
            }

            const data = await response.json();

            if (!data.location || !data.current) {
                throw new Error("Incomplete weather data received.");
            }

            // Update the current weather details
            document.querySelector(".city h2").innerText = data.location.name;
            document.querySelector(".temp h1").innerText = `${data.current.temp_c}°C`;
            document.querySelector(".humidity h3").innerText = `Humidity: ${data.current.humidity}%`;
            document.querySelector(".wind h3").innerText = `Wind: ${data.current.wind_kph} km/h`;
            document.querySelector(".weather h3").innerText = `Condition: ${data.current.condition.text}`;

            // Handle weather image based on condition
            const condition = data.current.condition.text.toLowerCase();
            let imageSrc = "";

            if (condition.includes("sunny") || condition.includes("clear")) {
                imageSrc = "./images/clear.png";
            } else if (condition.includes("cloudy") || condition.includes("overcast")) {
                imageSrc = "./images/clouds.png";
            } else if (condition.includes("rain") || condition.includes("showers")) {
                imageSrc = "./images/rain.png";
            } else if (condition.includes("snow")) {
                imageSrc = "./images/snow.png";
            } else if (condition.includes("windy")) {
                imageSrc = "./images/wind.png";
            } else {
                imageSrc = "./images/default.png";
            }

            document.querySelector(".weather_image img").src = imageSrc;

            // Now fetch the 5-day forecast
            const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=5`;
            const forecastResponse = await fetch(forecastUrl);

            if (!forecastResponse.ok) {
                throw new Error("Forecast data not found.");
            }

            const forecastData = await forecastResponse.json();

            if (forecastData.forecast && forecastData.forecast.forecastday) {
                // Display 5-day forecast
                const forecastContainer = document.querySelector(".forecast-day");
                forecastContainer.innerHTML = "";  // Clear previous forecast

                forecastData.forecast.forecastday.forEach(day => {
                    const dayElement = document.createElement("div");
                    dayElement.classList.add("day");

                    dayElement.innerHTML = `
                        <p>${new Date(day.date).toLocaleDateString()}</p>
                        <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
                        <p>${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C</p>
                        <p>${day.day.condition.text}</p>
                    `;

                    forecastContainer.appendChild(dayElement);
                });
            } else {
                throw new Error("Forecast data missing.");
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Couldn't fetch weather data. Please try again later or check the city name.");
        }
    });
};

currentWeather();
