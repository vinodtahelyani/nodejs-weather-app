const request = require('request');

var getWeather=(lat,long,callback)=>{
request({
    url:`https://api.darksky.net/forecast/d55d494d13670f8da5583a39c6ecaac8/${lat},${long}`,
    json:true
},(error,response,body)=>{
        if(response.statusCode === 200 && !error){
            callback(undefined,(body.currently.temperature-32)*5/9);
        } 
        else{
        callback('Unable to connect to weather');
        }
});
}

module.exports.getWeather = getWeather;