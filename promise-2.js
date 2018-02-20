const request = require('request');

var goecodeAddress = (address)=>{
    return new Promise ((resolve,reject)=>{
        /////////////////////
        request({
            url: 'https://maps.google.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
            json: true
            },(error,response,body)=>{
            if (error) {
                reject('unable to connect due to some error error occured');
            }
            else if (body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST') {
                reject('invalid address');
            }
            else if (body.status === 'OK') {

            resolve({
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            });
    }
    });
        //////////////////////
    });
};

goecodeAddress(292992).then((data)=>{
    console.log(JSON.stringify(data),undefined,2);
},(msg)=>{
    console.log(msg);
});