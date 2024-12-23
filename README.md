# Weather App

This Weather App allows users to fetch and display the current weather data for any city by using the [WeatherAPI](https://www.weatherapi.com/). The app includes features like a dynamic user interface, animations for weather updates, and condition-based weather icons.

## Features
- Search for weather in any city.
- Displays city name, temperature, humidity, wind speed, and weather condition.
- Dynamically updates the weather icon based on the current weather conditions.
- Smooth animations for UI elements to enhance user experience.

## Technologies Used
- **HTML5**: For structuring the web page.
- **CSS3**: For styling and animations.
- **JavaScript**: For fetching data from the API and adding interactivity.
- **WeatherAPI**: To fetch real-time weather data.

## Setup and Installation

### Prerequisites
- A modern web browser.
- Basic knowledge of HTML, CSS, and JavaScript.

### Steps to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd weather-app
   ```
3. Open `index.html` in a web browser to view the app.

### API Key Configuration
- Replace `your-api-key` in the `script.js` file with your own API key from [WeatherAPI](https://www.weatherapi.com/):
  ```javascript
  const apikey = "your-api-key";
  ```

## File Structure
```
weather-app/
├── index.html          # Main HTML file
├── style.css           # Styling for the app
├── script.js           # JavaScript for interactivity and animations
├── images/             # Folder containing weather icons
│   ├── sunny.png
│   ├── cloudy.png
│   ├── rain.png
│   ├── snow.png
│   └── windy.png
└── README.md           # Documentation file
```

## Usage
1. Enter the name of a city in the search bar.
2. Click the search button.
3. View the weather details displayed dynamically, including the city name, temperature, humidity, wind speed, and condition.
4. The weather icon changes according to the current weather conditions.

## Animations
The app includes the following animations:
- **Fade-in**: For the city name.
- **Bounce-in**: For the temperature.
- **Zoom-in**: For the weather icon.

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](https://www.apache.org/licenses/LICENSE-2.0) file for details.

## Contributions
Contributions are welcome! Feel free to fork this repository and submit a pull request with your changes.

## Author
- **FAISAL**
