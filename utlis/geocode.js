const request = require("request");

const geoCode = (adress, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?access_token=pk.eyJ1IjoiaWFtcHJhZ25lc2gwNSIsImEiOiJja29iaXR3NDMxZXltMm9tdWpkOGw5MGVrIn0.SGP5DnJKtGunADnwlnixZw`;

  request({ url, json: true }, (error, {body} = {}) => {
    if (error) {
      callback(console.log("Unable to connect internet"));
    } else if (body.features === 0) {
      callback(console.log("Unable to fetch location"));
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
