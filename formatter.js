const weatherFormats = [
  function({ weather_state_name }) {
    return `Wether: ${weather_state_name}\n`;
  },
  function({ min_temp, max_temp }) {
    return `Temperature:\n Minimum: ${min_temp} ํC\n Maximum: ${max_temp} ํC\n`;
  }
];

module.exports = {
  weather: function(data) {
    let str = "";

    weatherFormats.forEach(element => {
      str += element(data);
    });

    return str;
  }
};
