const request = require("request");
const geoCode = require("./utlis/geocode");
const foreCast = require("./utlis/forecast");

const adress = process.argv[2];

geoCode(adress, (error, {latitude,longitude, location } = {}) => {
  if (error) {
    return console.log(error);
  }

  foreCast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log("Error", error);
    }

    console.log(location);
    console.log(forecastData);
  });
});
