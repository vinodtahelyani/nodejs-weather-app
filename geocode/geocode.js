
const request = require('request');

var goeaddress = (address,callback) => {
    var urlAdd = 'https://maps.google.com/maps/api/geocode/json?address=' + encodeURIComponent(address);
    request({
        url: urlAdd,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log(err);
            callback('unable to connect due to some error error occured');
        }
        else if (body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST') {
            callback('invalid address');
        }
        else if (body.status === 'OK') {

            callback(undefined,{
            address : body.results[0].formatted_address,
            latitude : body.results[0].geometry.location.lat,
            longitude : body.results[0].geometry.location.lng
            });
        }
    });
    
};

module.exports.goeaddress = goeaddress;