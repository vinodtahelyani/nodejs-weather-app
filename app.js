const yargs = require('yargs');
const weather = require('./weather/weather.js');
const geocode = require('./geocode/geocode.js');
var argv = yargs
.options({a:{
        demand:true,
        alias:'address',
        describe:'address to fetch wether',
        string:true
    }   
}).help().alias('help','h').argv;

geocode.goeaddress(argv.a,(errorMessage,results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else if(results){
        console.log(results.latitude,results.longitude);
        weather.getWeather(results.latitude,results.longitude,(errorMessage,temperature)=>{
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(`the current temperature is ${temperature}`)
            }
        });
    }
});

console.log('sss');