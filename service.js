const request = require("request");

module.exports = {
  getWoeid: function(cityName, callback) {
    request(
      `https://www.metaweather.com/api/location/search/?query=${cityName}`,
      function(error, response) {
        callback(JSON.parse(response.body)[0].woeid);
      }
    );
  },
  getWeatherInformation: function(woeid, callback) {
    // console.log("Get weather info by " + woeid);

    request("https://www.metaweather.com/api/location/" + woeid, function(
      error,
      response
    ) {
      callback(JSON.parse(response.body));
    });
  }
};
