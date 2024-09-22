# Weather Forecast App

## Features
1. Display current weather information for a default city (New York).
2. Search functionality to fetch weather data for any city.
3. Display a 5-day weather forecast.
4. Toggle between Celsius and Fahrenheit for temperature units.
5. Responsive and clean UI for a smooth user experience.

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your system:

- Node.js (version 12 or later)
- npm (Node package manager) or yarn

### Steps to Run the Project Locally:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-repository-url/weather-app.git
cd weather-app
```

2. Install dependencies by running:

```bash
Copy code
npm install
Or, if you're using yarn:

```bash
yarn install
```

Replace your_api_key_here with your actual API key from OpenWeatherMap.

3. Start the development server:

```bash
Copy code
npm start
Or with yarn:

```bash
yarn start
View the application: Open your browser and go to http://localhost:3000 to view the application.

## Assumptions Made During Development
1. The weather forecast is based on OpenWeatherMap's API, and the 5-day forecast data is extracted by selecting one forecast entry per day (around midday).
2. By default, the app displays weather information for New York when first loaded.
3. Error handling is implemented to display appropriate messages when a city is not found or if there are network issues.
4. The temperature conversion logic is implemented manually to switch between Celsius and Fahrenheit without using any external libraries.

## How to Use the Application

### Default View:

When you first open the app, it shows the current weather and 5-day forecast for New York.

### Searching for a City:

1. Enter a city name in the search bar and either click the Search button or press the Enter key to fetch the weather information for that city.

### Switching Temperature Units:

Click the Toggle °C/°F button to switch between Celsius and Fahrenheit for the current temperature and 5-day forecast.

### Responsive Design:

The application adapts to different screen sizes, so it works well on both desktop and mobile devices.

## Technologies Used

1. React.js: A JavaScript library for building user interfaces.
2. OpenWeatherMap API: For fetching real-time weather data.
3. CSS: For styling the components and making the application responsive.