const { getWoeid, getWeatherInformation } = require("./service");
const Formatter = require("./formatter");

console.log("Weather App Start\n");

const cityName = process.argv[2];
if (cityName) {
  getWoeid(cityName, function(woeid) {
    getWeatherInformation(woeid, function(weatherInfoList) {
      const weatherInfo = weatherInfoList.consolidated_weather[0];
      console.log(Formatter.weather(weatherInfo));
    });
  });
} else {
  console.log("Please input CityName");
}
